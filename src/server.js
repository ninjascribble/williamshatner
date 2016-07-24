const util = require('util');
const path = require('path');
const express = require('express');
const jsx = require('express-react-views');
const app = express();
const port = 3000;
const viewsRootPath = path.join(__dirname, './components');
const staticRootPath = path.join(__dirname, '../static');
const clientCssPath = '/static/main.css';
const clientJsPath = '/static/main.js';

app.set('views', viewsRootPath);
app.set('view engine', 'js');
app.engine('js', jsx.createEngine());

// The /static directory is created by webpack, and won't exist by default!
app.use('/static', express.static(staticRootPath));

app.get('/', function (req, res) {
  res.render('Index', {
    clientCssPath,
    clientJsPath
  });
});

app.listen(port, function () {
  var info = this.address();
  util.log('Shatner is listening on ' + info.address + ':' + info.port);
});
