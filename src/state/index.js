const urlProcessor = require('./UrlProcessorReducer');

module.exports.getDefaultState = function () {
  return {
    urlProcessor: {
      status: 'READY',
      url: undefined,
      errors: null
    }
  }
}

module.exports.getStateReducers = function () {
  return {
    urlProcessor
  }
}
