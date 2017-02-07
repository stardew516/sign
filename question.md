#### 遇到问题:
##### 1. flash(显示通知)  没效果
###### 描述:
flash是session中一个用于存储信息的特殊区域.
消息写入到flash中, 在跳转*目标*页中显示该消息.
flash是配置*redirect*一同使用的, 以确保消息在目标页面中可用.
flash可用于*一次性*的消息提示, 再次刷新时, flash就没有提示消息了.
###### 解决:
index中引入了flash,
```
// flash 中间件，用来显示通知
app.use(flash());
```
但是没有配置,配好后,目标页加上<%= infos%>就可以使用了.
```
// set flash
app.use(function (req, res, next) {
  res.locals.infos = req.flash('info');
  next();
});
```
##### 2. GET http://localhost:1991/ net::ERR_TOO_MANY_REDIRECTS
###### 描述:
重定向过多,最后找到原因是因为存session值的时候没有仓库,没有使用mongodb.
###### 解决:
```
req.session.user = user; //改为本地文件存session值.
```





