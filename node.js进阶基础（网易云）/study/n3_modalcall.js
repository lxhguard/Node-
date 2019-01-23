var http = require('http');
// var user = require("./models/User.js")
var Teacher = require("./models/Teacher.js")
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html;    charset=utf-8' });
    if (request.url !== "/favicon.ico") {    //清除第2此访问  
        teacher = new Teacher(1, '张三', 20);
        teacher.enter();
        teacher.teach(response);
        response.end('');

    }
}).listen(8000);
console.log('Server  running  at  http://127.0.0.1:8000/');
