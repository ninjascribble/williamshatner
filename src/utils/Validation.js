const REGEX_URI = require('../lib/regex-weburl.js');

module.exports = class Validation {
  static isValidUrl(url = '') {
    return REGEX_URI.test(url);
  }
}
