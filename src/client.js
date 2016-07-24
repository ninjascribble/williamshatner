require('./sass/main.scss');

const React = require('react');
const ReactDom = require('react-dom');
const Redux = require('redux');
const Provider = require('react-redux').Provider;
const thunkMiddleware = require('redux-thunk');
const State = require('./state');
const App = require('./components/App');

let state = State.getDefaultState();
let reducers = Redux.combineReducers(State.getStateReducers());
let store = Redux.applyMiddleware(thunkMiddleware)(Redux.createStore)(reducers, state);

ReactDom.render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('redux-root'));
