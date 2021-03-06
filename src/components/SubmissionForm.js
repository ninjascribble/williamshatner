const React = require('react');

module.exports = React.createClass({
  propTypes: {
    status: React.PropTypes.string.isRequired,
    url: React.PropTypes.string,
    errors: React.PropTypes.array,
    processed: React.PropTypes.object,
    onSubmit: React.PropTypes.func.isRequired
  },

  componentWillReceiveProps: function (nextProps) {
    if (!nextProps.url) {
      this.refs.form.reset();
    }
  },

  render: function () {
    return (
      <form ref="form" className="submissionForm" onSubmit={ this.onSubmit }>
        { this.renderSuccess() }
        { this.renderErrors() }
        <div className="input-group input-group-lg">
          <input
              name="url"
              type="text"
              className="form-control"
              placeholder="http://www..."
              disabled={ this.props.status === 'PROCESSING' } />
          { this.renderButton() }
        </div>
      </form>
    );
  },

  renderSuccess: function () {
    if (this.props.processed) {
      return (
        <div className="alert alert-success" role="alert">
          <ul className="list-unstyled">
            <li className="truncate-text">
              <strong>Long Url: </strong>
              <a target="_blank"
                href={ this.props.processed.longUrl }>{ this.props.processed.longUrl }</a>
            </li>
            <li className="truncate-text">
              <strong>Short Url: </strong>
              <a target="_blank"
                href={ this.props.processed.shortUrl }>{ this.props.processed.shortUrl }</a>
            </li>
            <li className="truncate-text">
              <strong>Clickthroughs: </strong>{ this.props.processed.clicks }
            </li>
          </ul>
        </div>
      )
    }
  },

  renderErrors: function () {
    if (this.props.errors) {
      return (
        <div className="alert alert-danger" role="alert">
          { this.props.errors[0] }
        </div>
      )
    }
  },

  renderButton: function () {
    if (this.props.status === 'PROCESSING') {
      return (
        <span className="input-group-addon">
          <i className="glyphicon glyphicon-refresh spinning"></i>
        </span>
      );
    } else {
      return (
        <span className="input-group-btn">
          <button className="btn btn-default" type="submit">Go</button>
        </span>
      )
    }
  },

  onSubmit: function (evt) {
    evt.preventDefault();
    this.props.onSubmit(this.refs.form['url'].value);
  }
});
