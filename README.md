# scodeshop

课程地址：https://coding.imooc.com/learn/list/97.html <br>

三端分离 <br>
1、服务端 <br>
    ThinkPHP 5 + MySQL构建REST API <br>
2、客户端 <br>
    向服务端请求数据，完成自身行为逻辑 <br>
3、CMS（数据管理分离） <br>
    向服务端请求数据，实现发货与发送微信消息 <br>

查看端口占用 netstat -ano <br>

豆瓣开放API github开放API <br>

http://127.0.0.3/index.php/sample/test/hello <br>

http://127.0.0.3/index.php/api/v1/banner/1 <br>
http://127.0.0.3/index.php/api/v1/theme?ids=1,2,3 <br>


999  未知错误 <br>
1 开头为通用错误 <br>
2 商品类错误 <br>
3 主题类错误 <br>
4 Banner类错误 <br>
5 类目类错误 <br>
6 用户类错误 <br>
8 订单类错误 <br>

10000 通用参数错误 <br>
10001 资源未找到 <br>
10002 未授权（令牌不合法） <br>
10003 尝试非法操作（自己的令牌操作其他人数据） <br>
10004 授权失败（第三方应用账号登陆失败） <br>
10005 授权失败（服务器缓存异常） <br>
20000 请求商品不存在 <br>
30000 请求主题不存在 <br>
40000 Banner不存在 <br>
50000 类目不存在 <br>
60000 用户不存在 <br>
60001 用户地址不存在 <br>
80000 订单不存在 <br>
80001 订单中的商品不存在，可能已被删除 <br>
80002 订单还未支付，却尝试发货 <br>
80003 订单已支付过 <br>







