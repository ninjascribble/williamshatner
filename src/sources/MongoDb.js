const MongoJs = require('mongojs');
const Config = require('../config');

var client;

module.exports = class MongoDb {
  static getClient () {
    if (!client) {
      let connectionString = Config.get('SHATNER_MONGO_DB');
      client = MongoJs(connectionString);
    }
    return client
  }

  static getCollection (name = '') {
    return MongoDb.getClient().collection(name);
  }
}
