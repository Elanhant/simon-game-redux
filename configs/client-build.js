var webpack       = require('webpack');
var path          = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var client        = require('./client-common');

var clientConfig  = client.extend({
  name: 'client build',
  output: {
    path: path.join(__dirname ,'/../'),
    filename: "client-build.js"
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('style-build.css'),
    new webpack.DefinePlugin({
      'IS_DEVELOP': false,
      'IS_BROWSER': true,
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader?optional=runtime'], exclude: /node_modules/ }
    ]
  }
});

module.exports = clientConfig;
