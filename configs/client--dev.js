var webpack           = require('webpack');
var path              = require('path');
var IP                = require('ip');

var clientConfig      = require('./client-common');

var clientDevConfig   = clientConfig.extend({
  entry: [
    'webpack/hot/only-dev-server',
    'webpack-dev-server-cors/client?http://' + IP.address() + ':3002'
  ],
  output: {
    path: __dirname + '/bundles',
    filename: "bundle.js",
    publicPath: 'http://' + IP.address() + ':3002/assets/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'IS_DEVELOP': true,
      'IS_BROWSER': true
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot','babel-loader?optional=runtime'], exclude: /node_modules/ }
    ]
  },
  devtool: 'eval'
});

module.exports = clientDevConfig;
