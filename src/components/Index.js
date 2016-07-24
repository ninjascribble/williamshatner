const React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <title>William Shatner is a URL shortener</title>
          <link rel="stylesheet" href={ this.props.clientCssPath }/>
        </head>
        <body>
          <div id="redux-root"></div>
          <script type="text/javascript" src={ this.props.clientJsPath }></script>
        </body>
      </html>
    );
  }
});
