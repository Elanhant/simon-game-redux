var webpack = require('webpack');

var server = require('./server');
var client = require('./client-build');

module.exports = [server, client];
