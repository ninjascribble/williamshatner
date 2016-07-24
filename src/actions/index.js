module.exports.SUBMIT_LONG_URL = 'SUBMIT_LONG_URL';
module.exports.HTTP_REQUEST_SHORT_URL = 'HTTP_REQUEST_SHORT_URL';
module.exports.HTTP_RESPONSE_SHORT_URL = 'HTTP_RESPONSE_SHORT_URL';
module.exports.INVALID_LONG_URL = 'INVALID_LONG_URL';

module.exports.createDispatcher = function(dispatch, action) {
  return function (...args) {
    dispatch(action(...args));
  }
}

module.exports.submitLongUrl = function (url) {
  return (dispatch) => {
    let isValid = /^http/.test(url);
    let errors = ['invalid url format'];

    if (isValid === true) {
      dispatch(module.exports.httpRequestShortUrl(url));
    } else {
      dispatch(module.exports.invalidLongUrl(url, errors));
    }
  }
}

module.exports.httpRequestShortUrl = function(url) {
  return (dispatch) => {
    dispatch({
      type: module.exports.HTTP_REQUEST_SHORT_URL,
      payload: { url }
    })
    setTimeout(() => {
      dispatch(module.exports.httpResponseShortUrl())
    }, 2000);
  };
}

module.exports.httpResponseShortUrl = function() {
  return {
    type: module.exports.HTTP_RESPONSE_SHORT_URL,
    payload: {
      title: 'placeholder title',
      longUrl: 'placeholder long url',
      shortUrl: 'placeholder short url'
    }
  };
}

module.exports.invalidLongUrl = function(url, errors) {
  return {
    type: module.exports.INVALID_LONG_URL,
    payload: { url, errors }
  }
}
