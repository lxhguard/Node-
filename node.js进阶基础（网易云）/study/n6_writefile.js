var http = require('http');
var url = require('url');
var router = require('./router');
var optfile = require('./models/optfile.js');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html;    charset=utf-8' });
    if (request.url !== "/favicon.ico") {  //清除第2次访问
        function recall(data) {
            response.write(data);
            response.end('ok');//不写则没有http协议尾
        }

        var pathname = url.parse(request.url).pathname;
        pathname = pathname.replace(/\//, '');//替换掉前面的/
        console.log(pathname);
        router[pathname](request, response, recall);

        

       
    }
}).listen(8000);

console.log('Server    running    at    http://127.0.0.1:8000/');
