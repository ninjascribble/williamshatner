const util = require('util');
const express = require('express');
const jsx = require('express-react-views');
const app = express();
const port = 3000;

app.set('views', __dirname + '/components');
app.set('view engine', 'jsx');
app.engine('jsx', jsx.createEngine());

app.get('/', function (req, res) {
  res.render('Index', {});
});

app.listen(port, function () {
  var info = this.address();
  util.log('Shatner is listening on ' + info.address + ':' + info.port);
});
