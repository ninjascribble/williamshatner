const crc32 = require('crc-32');

module.exports = {
  tinyHash: function (str = '') {
    return Math.abs(crc32.str(String(str))).toString(32);
  }
}
