var Config = require('webpack-config').Config;

var common = new Config({
  resolve: {
    extensions: ['', '.js','.css','.scss'],
    modulesDirectories: ["web_modules", "node_modules", 'components']
  },
  module: {
    loaders: [
      { test: /\.json?$/, loader: "json-loader" }
    ]
  }
});

module.exports = common;
