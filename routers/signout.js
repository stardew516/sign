var sha1 = require('sha1');
var express = require('express');
var router = express.Router();
var wrFile = require('../lib/wrFile');
router.get('/', function(req, res, next) {
  wrFile.writeData([], 'usession');
  res.render('signout', {
    title: '退出'
  });
  next();
});


module.exports = router;
