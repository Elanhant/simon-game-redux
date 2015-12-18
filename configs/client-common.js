var webpack       = require('webpack');
var autoprefixer  = require('autoprefixer-core');
var common        = require('./common');

var clientConfig = common.extend({
  entry: [
    './client.js'
  ],

  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.(scss|css)$/, loader: "style!css!postcss!sass" },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  postcss: [
    autoprefixer({ browsers: ['ff >= 30', 'Chrome >= 35', 'ie >= 10', 'Safari >= 7'], remove: false })
  ]
});

module.exports = clientConfig;
