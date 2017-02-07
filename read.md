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

