const Strings = require('../utils/Strings');

module.exports = {
  configureIndexPageHandler: function (clientCssPath, clientJsPath) {
    return (req, res) => {
      res.render('Index', { clientCssPath, clientJsPath });
    }
  },

  configureCreateUrlHandler: function () {
    return (req, res) => {
      res.send({
        title: 'this is the title from the server',
        longUrl: req.body.url,
        shortUrl: Strings.tinyHash(req.body.url),
        errors: null
      });
    }
  },

  configureResolveUrlHandler: function () {
    return (req, res) => {
      res.send({
        shortUrl: req.params.url,
        errors: 'could not resolve url'
      });
    }
  }
}
