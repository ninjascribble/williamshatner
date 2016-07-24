const Actions = require('../actions');
const Component = require('../components/SubmissionForm');
const ReactRedux = require('react-redux');

const mapStateToProps = (state, ownProps) => {
  return {
    status: state.urlProcessor.status,
    url: state.urlProcessor.url,
    errors: state.urlProcessor.errors
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: Actions.createDispatcher(dispatch, Actions.submitLongUrl)
  }
}

module.exports = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);