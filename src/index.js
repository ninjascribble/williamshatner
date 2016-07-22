const util = require('util');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
  res.send('sweet!');
});

app.listen(port, function () {
  var info = this.address();
  util.log('Shatner is listening on ' + info.address + ':' + info.port);
});
