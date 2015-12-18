var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server-cors');
var config = require('./configs/client--dev.js');
var ip = require('ip').address();


new WebpackDevServer(webpack(config), {
  hot: true,
  publicPath: 'http://' + ip + ':3002/assets/',
  stats: {
    chunkModules: false,
    colors: true
  }
})
.listen(3002, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err);
  }
});
