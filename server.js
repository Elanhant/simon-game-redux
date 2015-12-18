"use strict";

import express  from 'express';
import url      from 'url';

import React    from 'react';
import ReactDOM from 'react-dom';

let App = express();
App.set('views', __dirname);
App.set('view engine', 'ejs');
App.use('/', express.static(__dirname + '/'));
App.use('/sounds', express.static(__dirname + '/components/'));
App.use('/browser', express.static(__dirname + '/browser'));

let ENV, ip;
if(IS_DEVELOP){
  ip = require('ip').address();
  ENV = 'development';
}else{
  ENV = 'production';
  ip = '';
}

App.listen(3001, "0.0.0.0", function () {
  console.log('server start');
});

App.get('*', function(req, res){
  res.render('index.ejs', {
    content: '',
    ENV,
    ip: ip
  });
});
