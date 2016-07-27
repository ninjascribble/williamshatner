const url = require('url');
const fs = require('fs');
const path = require('path');
const marked = require('marked');
const MongoDb = require('../sources/MongoDb');
const Strings = require('../utils/Strings');
const Config = require('../config');

module.exports = {
  configureIndexPageHandler: function (clientCssPath, clientJsPath, readmePath) {
    return (req, res) => {
      fs.readFile(readmePath, 'utf-8', (err, text) => {
        if (err) {
          res.send({ errors: [err.message] });
        } else {
          res.render('Index', {
            clientCssPath,
            clientJsPath,
            readme: marked(text)
          });
        }
      });
    }
  },

  configureCreateUrlHandler: function () {
    return (req, res) => {
      let baseUrl = Config.get('SHATNER_BASE_URL');
      let collection = MongoDb.getCollection('urls');
      let longUrl = req.body.url;
      let shortCode = Strings.tinyHash(longUrl)
      let shortUrl = url.resolve(baseUrl, shortCode);
      let dateAdded = new Date();
      let clicks = 0;

      collection.findAndModify({
        query: { longUrl },
        upsert: true,
        new: true,
        update: {
          $setOnInsert: { longUrl, shortCode, dateAdded, clicks }
        }
      }, (err, result) => {
        if (err) {
          res.send({ errors: [err.message] });
        } else {
          res.send({ longUrl, shortUrl, clicks: result.clicks });
        }
      });
    }
  },

  configureResolveUrlHandler: function () {
    return (req, res) => {
      let collection = MongoDb.getCollection('urls');
      let shortCode = req.params.url;

      collection.findAndModify({
        query: { shortCode },
        update: {
          $inc: { clicks: 1 }
        }
      }, (err, result) => {
        if (err) {
          return res.send({ errors: [err.message] });
        }
        if (!result) {
          return res.status(404).send({ errors: ['Not Found'] });
        }

        // Intentionally using 302 FOUND so that we can register subsequent clicks
        res.redirect(302, result.longUrl);
      });
    }
  }
}
