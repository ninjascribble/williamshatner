const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const Actions = require('../../actions');
const Validation = require('../../utils/Validation');

chai.use(sinonChai);

suite('Actions.createDispatcher', () => {
  var dispatch = sinon.stub();
  var action = sinon.stub();
  var actionArgs = 42;
  var actionRetval = 33;

  setup(() => {
    dispatch.reset();
    action.reset();
    action.returns(actionRetval);
  });

  test('Returns an executable', () => {
    let result = Actions.createDispatcher(dispatch, action);

    result(actionArgs);
    expect(result).to.be.a('function');
    expect(action).to.have.been.calledOnce;
    expect(action).to.have.been.calledWith(actionArgs);
    expect(dispatch).to.have.been.calledOnce;
    expect(dispatch).to.have.been.calledWith(actionRetval);
  });

  test('Throws when dispatch is not a function', () => {
    let dispatch = 'not a function';

    expect(() => Actions.createDispatcher(dispatch, action)).to.throw();
  });

  test('Throws when action is not a function', () => {
    let action = 'not a function';

    expect(() => Actions.createDispatcher(dispatch, action)).to.throw();
  });
});

suite('Actions.requestShortUrl', () => {
  var dispatch = sinon.stub();
  var isValidUrl = sinon.stub(Validation, 'isValidUrl');
  var requestShortUrlError = sinon.stub(Actions, 'requestShortUrlError');

  setup(() => {
    dispatch.reset();
    isValidUrl.reset();
    requestShortUrlError.reset();
  });

  suiteTeardown(() => {
    isValidUrl.restore();
    requestShortUrlError.restore();
  });

  test('Dispatches REQUEST_SHORT_URL when url is valid', () => {
    let url = 'a valid url';

    isValidUrl.returns(true);
    Actions.requestShortUrl(url)(dispatch);

    expect(requestShortUrlError).to.have.not.been.called;
    expect(dispatch).to.have.been.calledWith({
      type: Actions.REQUEST_SHORT_URL,
      payload: { url }
    });
  });

  test('Calls Actions.requestShortUrlError when url is invalid', () => {
    let url = 'an invalid url';
    let requestShortUrlErrorResult = 'something to test with';

    isValidUrl.returns(false);
    requestShortUrlError.returns(requestShortUrlErrorResult);
    Actions.requestShortUrl(url)(dispatch);

    expect(requestShortUrlError).to.have.been.calledOnce;
    expect(requestShortUrlError).to.have.been.calledWith(url, sinon.match.array);
    expect(dispatch).to.have.been.calledOnce;
    expect(dispatch).to.have.been.calledWith(requestShortUrlErrorResult);
  });
});

suite('Actions.requestShortUrlError', () => {
  test('Returns REQUEST_SHORT_URL_ERROR', () => {
    let url = 'an invalid url';
    let errors = ['an error message'];
    let result = Actions.requestShortUrlError(url, errors);

    expect(result).to.deep.equal({
      type: Actions.REQUEST_SHORT_URL_ERROR,
      payload: { url, errors }
    })
  });
});

suite('Actions.receiveShortUrl', () => {
  test('Returns RECEIVE_SHORT_URL', () => {
    let title = 'mock data title';
    let longUrl = 'mock data long url';
    let shortUrl = 'mock data short url';
    let result = Actions.receiveShortUrl(title, longUrl, shortUrl);

    expect(result).to.deep.equal({
      type: Actions.RECEIVE_SHORT_URL,
      payload: { title, longUrl, shortUrl }
    })
  });
});
