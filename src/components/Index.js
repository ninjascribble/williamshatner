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
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 col-md-offset-2"
                dangerouslySetInnerHTML={ this.renderReadme() }/>
            </div>
          </div>
          <footer>
            <p className="text-center">
            Built with <i className="glyphicon glyphicon-heart"></i> by <a href="http://ninjascript.com" target="_blank">Scott Grogan</a> (<a href="https://github.com/ninjascribble">ninjascribble</a>)
            </p>
          </footer>
          <script type="text/javascript" src={ this.props.clientJsPath }></script>
        </body>
      </html>
    );
  },

  renderReadme: function () {
    return { __html: this.props.readme }
  }
});
