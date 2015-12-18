process.env.NODE_ENV = process.env.NODE_ENV || "development";

process.env.NODE_PATH = __dirname + '/components';
require('module').Module._initPaths();
require('babel/register');

GLOBAL.IS_BROWSER = false;
GLOBAL.IS_DEVELOP = true;

require('./server');
