var http = require('http');
var fs = require('fs');
var server = http.createServer();
server.listen(8080, function () {
    console.log("Server is rining port 8080");
});
//请求回调函数
var handRequest = function (req, res) {
    console.log('当前的请求是:' + req.url);
    //	response.write('hello');
    //	response.write('world');
    //response.writeHead(响应状态码，响应头对象)
    var url = req.url;
    if (url == "/login") {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        fs.readFile('index.html', 'utf8', function (err, data) {
            if (err) {
                throw err;
            }
            res.end(data);
        });
    } else {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.readFile('404.html', 'utf8', function (err, data) {
            if (err) {
                throw err;
            }
            res.end(data);
        });
    }
    //发送完数据后结束响应
    //res.end('404 NotFound');
};
//任何请求都会触发该事件
server.on('request', handRequest);

