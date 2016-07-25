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
      shortUrl: undefined,
      longUrl: undefined,
      clicks: undefined
    }
  };
}

module.exports.getStateReducers = function () {
  return { urlProcessor, lastProcessed };
}
