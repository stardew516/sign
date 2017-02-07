var sha1 = require('sha1');
var express = require('express');
var router = express.Router();
var wrFile = require('../lib/wrFile');
var checkNotLogin = require('../models/check').checkNotLogin;
router.get('/', checkNotLogin, function(req, res, next) {
  res.render('signup', {
    title: '注册'
  });
  next();
});


// 用户注册post
router.post('/', checkNotLogin, function(req, res, next) {
  // phone判断唯一
  const username = req.fields.username;
  const email = req.fields.email;
  const phone = req.fields.phone;
  const password = req.fields.password;
  const confirmPassword = req.fields.confirmPassword;
  console.log(username, email, phone, sha1(password), confirmPassword);
  var uList = [];
  var flag = false; // 是否注册过
  const user = {
    username: username,
    email: email,
    phone: phone,
    password: sha1(password)
  };
  // req.session.user = user;
  var userList = wrFile.readFile('users');
  console.log(typeof userList, userList);
  console.log('flag', flag);
  if (userList.length === 0) {
    uList.push(user);
    console.log(typeof uList, uList);
    wrFile.writeData(uList, 'users');
    req.flash('info', '注册成功, 请登录!');
  } else {
    for (var u of userList) {
      if (u.phone === phone) {
        flag = true;
        break;
      }
    }
    console.log('flag', flag);
    if (flag) {
      req.flash('info', '您已经注册过了, 请直接登录!');
    } else {
      userList.push(user);
      wrFile.writeData(userList, 'users');
      req.flash('info', '注册成功, 请登录!');
    }
    console.log('flag', flag);
  }
  res.redirect('/signin');
});

module.exports = router;
