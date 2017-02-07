var sha1 = require('sha1');
var express = require('express');
var router = express.Router();
var wrFile = require('../lib/wrFile');
var checkNotLogin = require('../models/check').checkNotLogin;
router.get('/', checkNotLogin, function(req, res, next) {
  res.render('signin', {
    title: '登录'
  });
  next();
});

// 用户登录post
router.post('/', checkNotLogin, function(req, res, next) {
  const username = req.fields.username;
  var password = req.fields.passwordOne;
  var remember = req.fields.remember;
  console.log(password, remember);
  password = sha1(password);
  var userList = wrFile.readFile('users') || [];
  var flagUser = false;
  var flag = false;
  console.log(123, userList);
  for (var u of userList) {
    if (u.username === username) {
      flagUser = true;
      if (u.password === password) {
        flag = true;
      }
      break
    }
  }
  if (flag) {
    req.flash('info', '登陆成功!');
    const user = [{
      username: username,
      password: password
    }];
    wrFile.writeData(user, 'usession');
    //req.session.user = user;
    //console.log(req.session, 'session');
    res.redirect('/home');
  } else {
    if (!flagUser) {
      req.flash('info', '该用户不存在!');
    } else {
      req.flash('info', '密码或用户名错误, 请登录!');
    }
    res.redirect('/signin');
  }
});
module.exports = router;
