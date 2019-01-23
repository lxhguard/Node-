var http = require('http');
var url = require('url');
var router = require('./router');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html;    charset=utf-8' });
    if (request.url !== "/favicon.ico") {  //清除第2次访问
        var pathname = url.parse(request.url).pathname;
        pathname = pathname.replace(/\//, '');//替换掉前面的/
        try {
            router[pathname](request, response);
        } catch (err) {
            //同步操作出问题，进行报错
            console.log('n12_exception报错：' + err);
            response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
            response.write(err.toString());
            response.end('');
        }
        console.log("server执行完毕");





    }
}).listen(8000);

console.log('Server    running    at    http://127.0.0.1:8000/');
