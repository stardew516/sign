npm run dev启动项目

没有使用mongodb
用户注册以及存的session值都在静态目录static/database下

功能:
1. 用户注册
使用手机号唯一标识用户信息
2. 用户登录
登录时该用户的用户名和密码写入database里的usession.json文件中. 登陆成功进入主页面.
3. 用户进入主页面
没有登录不能进入主页面, 主页面是我平时收集的一些前端页面的链接.
4. 用户退出
主页面右上角有退出功能, 点击之后清空session, 跳转到退出成功页面.

样式使用的是bootstrap.


页面结构:
sign
  config
    default.js      基本信息配置
  lib
    wrFile.js       读写文件
  logs              logs日志信息(无)
  models
    check.js        检查是否登录
  node_modules      依赖包放置
  routers           路由配置
    home.js         主页路由及功能
    index.js        路由入口
    signin.js       登录页路由及功能
    signout.js      登出页路由及功能
    signup.js       注册页路由及功能
    users.js        练手的,没啥用
  static            静态路径
    css
      bookmark.css  主页基本css
      common.css    空的
    database        存放用户信息
      users.json    用户列表
      usession.json 用户session
    img
      lujiang.ico   浏览器头ico
    js
      valid.js      注册登录信息的校验
    libs
      bootstrap     bootstrap样式
      jquery        校验依赖
  views             页面
    common          公用页面
      footer.ejs    底部
      header.ejs    头部
    error.ejs       错误页
    home.ejs        主页
    signin.ejs      登录页
    signout.ejs     登出页
    signup.ejs      注册页
    success.ejs     退出成功页
    user.ejs        练手的
  .gitignore        不上传
  index.js          入口
  npm-debug.log     日志
  package.json      依赖包配置
  question.md       遇到问题及解决
  read.md           readme



