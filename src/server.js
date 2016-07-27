const util = require('util');
const path = require('path');
const express = require('express');
const jsx = require('express-react-views');
const bodyParser = require('body-parser');
const Routes = require('./routes');
const app = express();
const port = 3000;
const viewsRootPath = path.join(__dirname, './components');
const staticRootPath = path.join(__dirname, '../static');
const clientCssPath = '/static/main.css';
const clientJsPath = '/static/main.js';
const readmePath = path.join(__dirname, '../README.md');

app.set('views', viewsRootPath);
app.set('view engine', 'js');
app.engine('js', jsx.createEngine());

app.use('/static', express.static(staticRootPath));
app.use(bodyParser.json());

app.get('/', Routes.configureIndexPageHandler(clientCssPath, clientJsPath, readmePath));
app.post('/url', Routes.configureCreateUrlHandler());
app.get('/:url', Routes.configureResolveUrlHandler());

app.listen(port, function () {
  var info = this.address();
  util.log('Shatner is listening on ' + info.address + ':' + info.port);
});
