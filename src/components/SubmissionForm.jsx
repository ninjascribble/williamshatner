const React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <form className="submissionForm">
        <div className="input-group input-group-lg">
          <input type="text" className="form-control" placeholder="http://www..." />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Go</button>
          </span>
        </div>
      </form>
    );
  }
});
