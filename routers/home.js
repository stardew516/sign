var sha1 = require('sha1');
var express = require('express');
var wrFile = require('../lib/wrFile');
var router = express.Router();
var checkLogin = require('../models/check').checkLogin;

router.get('/', checkLogin, function(req, res, next) {
  var usession = wrFile.readFile('usession');
  var username = '';
  try {
    username = usession[0].username;
  } catch (e) {

  }
  res.render('home', {
    title: '主页',
    username: username
  });
  next();
});


module.exports = router;
