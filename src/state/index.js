const urlProcessor = require('./UrlProcessorReducer');
const lastProcessed = require('./LastProcessedReducer');

module.exports.getDefaultState = function () {
  return {
    urlProcessor: {
      status: 'READY',
      url: undefined,
      errors: null,
      processed: undefined
    },
    lastProcessed: {
      title: undefined,
      shortUrl: undefined,
      longUrl: undefined
    }
  };
}

module.exports.getStateReducers = function () {
  return { urlProcessor, lastProcessed };
}
