var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var common = require('./common');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });


var serverConfig = common.extend({
  name: 'server build',
  entry: [
    './server.js'
  ],
  target: 'node',
  output: {
    path: path.join(__dirname ,'/../'),
    filename: "server-build.js"
  },
  plugins: [
    new webpack.DefinePlugin({
      'IS_BROWSER': false,
      'IS_DEVELOP': false
    })
  ],
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader?optional=runtime'], exclude: /node_modules/ },
    ]
  },
  externals: nodeModules

});

module.exports = serverConfig;
