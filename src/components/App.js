const React = require('react');
const PageHeader = require('./PageHeader');
const SubmissionForm = require('../containers/SubmissionForm');

module.exports = React.createClass({
  render: function () {
    return (
        <div>
          <div className="jumbotron">
            <div className="container-fluid">
              <div className="row">
                <PageHeader/>
              </div>
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <SubmissionForm/>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
});
