const React = require('react');
const PageHeader = require('./PageHeader');
const SubmissionForm = require('./SubmissionForm');

module.exports = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <title>William Shatner is a URL shortener</title>
          <link rel="stylesheet" href={ this.props.clientCssPath }/>
        </head>
        <body>
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
          <script type="text/javascript" src={ this.props.clientJsPath }></script>
        </body>
      </html>
    );
  }
});
