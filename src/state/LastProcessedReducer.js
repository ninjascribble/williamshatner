const Actions = require('../actions');

module.exports = function (state = {}, action) {
  let result = {
    longUrl: state.longUrl,
    shortUrl: state.shortUrl,
    clicks: state.clicks
  };

  switch (action.type) {
    case Actions.REQUEST_SHORT_URL:
      result.title = undefined;
      result.longUrl = undefined;
      result.shortUrl = undefined;
      result.clicks = undefined;
      break;

    case Actions.RECEIVE_SHORT_URL:
      result.title = action.payload.title;
      result.longUrl = action.payload.longUrl;
      result.shortUrl = action.payload.shortUrl;
      result.clicks = action.payload.clicks;
      break;

    case Actions.REQUEST_SHORT_URL_ERROR:
      result.title = undefined;
      result.longUrl = undefined;
      result.shortUrl = undefined;
      result.clicks = undefined;
      break;

    default:
      break;
  }

  return result;
}
