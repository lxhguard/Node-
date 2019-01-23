//Node 创建 Web 客户端

var http = require('http');
//用于请求的选项
var options = {
    host: 'localhost',
    port: '8081',
    path: '/WebServer/index.html'
};
//处理响应的回调函数
var callback = function (response) {
    //不断更新数据
    var body = '';
    response.on('data', function (data) {
        body += data;
    });
    response.on('end', function () {
        //数据接收完成
        console.log(body);
    });
};
//向服务器端发送请求
var req = http.request(options, callback);
req.end();