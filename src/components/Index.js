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
          <script type="text/javascript" src={ this.props.clientJsPath }></script>
        </body>
      </html>
    );
  },

  renderReadme: function () {
    return { __html: this.props.readme }
  }
});
