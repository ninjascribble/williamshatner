var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
  context: __dirname,
  entry: './client.js',
  output: {
    path: path.join(__dirname, '../static'),
    filename: 'main.js',
    sourceMapFilename: '[file].map'
  },
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      loader: 'babel'
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', ['css', 'sass?sourceMap'])
    }, {
      test: /\.json/,
      loader: 'file?name=[path][name].[ext]'
    }, {
      test: /\.gif|\.jpg|\.png/,
      loader: 'file?name=[path][name].[ext]'
    }, {
      test: /\.woff|\.woff2|\.ttf|\.eot|\.svg/,
      loader: 'file?name=[path][name].[ext]'
    }]
  },
  plugins: [
    new ExtractTextPlugin('main.css')
  ]
}];
