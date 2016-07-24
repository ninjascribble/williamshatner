const axios = require('axios');
const Validation = require('../utils/Validation');

module.exports = class Actions {
  static get REQUEST_SHORT_URL() { return 'REQUEST_SHORT_URL'; }
  static get RECEIVE_SHORT_URL() { return 'RECEIVE_SHORT_URL'; }
  static get REQUEST_SHORT_URL_ERROR() { return 'REQUEST_SHORT_URL_ERROR'; }

  static createDispatcher (dispatch, action) {
    if (typeof dispatch !== 'function' || typeof action !== 'function') {
      throw new TypeError('dispatch and action must be functions');
    }
    return function (...args) {
      dispatch(action(...args));
    }
  }

  static requestShortUrl (url) {
    let isValid = Validation.isValidUrl(url);
    let errors = ['invalid url format'];

    return (dispatch) => {
      if (isValid === true) {
        dispatch({
          type: Actions.REQUEST_SHORT_URL,
          payload: { url }
        });

        axios.post('/url', { url })
          .then((res) => {
            if (!res.data) {
              throw new Error('Could not reach the server');
            }
            if (res.data.errors) {
              throw new Error(errors);
            }
            dispatch(Actions.receiveShortUrl(
              res.data.title,
              res.data.longUrl,
              res.data.shortUrl
            ));
          })
          .catch((err) => {
            dispatch(Actions.requestShortUrlError(url, err));
          });
      } else {
        dispatch(Actions.requestShortUrlError(url, errors));
      }
    }
  }

  static requestShortUrlError (url, errors) {
    if (errors instanceof Error === true) {
      errors = [errors.message];
    }
    if (errors instanceof Array === false) {
      errors = [errors];
    }
    return {
      type: Actions.REQUEST_SHORT_URL_ERROR,
      payload: { url, errors }
    }
  }

  static receiveShortUrl (title, longUrl, shortUrl) {
    return {
      type: Actions.RECEIVE_SHORT_URL,
      payload: { title, longUrl, shortUrl }
    };
  }
}
