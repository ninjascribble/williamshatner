const React = require('react');
const SubmissionForm = require('./SubmissionForm');

module.exports = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <title>William Shatner is a URL shortener</title>
        </head>
        <body>
          <SubmissionForm/>
        </body>
      </html>
    );
  }
});
