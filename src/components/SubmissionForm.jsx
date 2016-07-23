const React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <h2>William Shatner is a URL shortener</h2>
        <form>
          <input type="text" placeholder="http://www..."/>
          <button type="submit">Make it so</button>
        </form>
      </div>
    );
  }
});
