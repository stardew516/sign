var wrFile = require('../lib/wrFile');
module.exports = {
  checkLogin: function (req, res, next) {
    var usession = wrFile.readFile('usession');
    if (!(usession[0] && usession[0].username)) {
      req.flash('info', '请先登录');
      return res.redirect('/signin');
    }
    next();
  },
  checkNotLogin: function (req, res, next) {
    var usession = wrFile.readFile('usession');
    if (usession[0] && usession[0].username) {
      req.flash('info', '已登录');
      return res.redirect('/home');
    }
    next();
  }
}