const Actions = require('../actions');

module.exports = function (state = {}, action) {
  let result = {
    status: state.status,
    url: state.url,
    errors: state.errors
  };

  switch (action.type) {
    case Actions.HTTP_REQUEST_SHORT_URL:
      result.status = 'PROCESSING';
      result.errors = null;
      result.url = action.payload.url;
      break;

    case Actions.HTTP_RESPONSE_SHORT_URL:
      result.status = 'READY';
      result.errors = null;
      result.url = undefined;
      break;

    case Actions.INVALID_LONG_URL:
      result.status = 'ERROR';
      result.errors = action.payload.errors;
      result.url = undefined;
      break;

    default:
      break;
  }

  return result;
}
