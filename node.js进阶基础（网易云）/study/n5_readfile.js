var http = require('http');
var url = require('url');
var router = require('./router');
var  optfile = require('./models/optfile.js');

http.createServer(function (request, response){
    response.writeHead(200, { 'Content-Type': 'text/html;    charset=utf-8'});
    if (request.url !== "/favicon.ico") {  //清除第2次访问
          
        var pathname = url.parse(request.url).pathname;
        pathname = pathname.replace(/\//, '');//替换掉前面的/
        console.log(pathname);
        router[pathname](request, response);

        //同步 读取操作
        // optfile.readfileSync('./views/login.html');

        // //异步读取操作
        // //闭包(函数嵌套函数) 解决response在optfile.js中可以使用
        // function recall(data){
        //     response.write(data);
        //     response.end('ok');//不写则没有http协议尾
        // }
        // optfile.readfile('./views/login.html',recall);


        // // response.end('ok');//不写则没有http协议尾,在使用异步&&闭包时，应该把该语句移动到回调函数里面
        // console.log('主程序执行完毕');
    }
}).listen(8000);

console.log('Server    running    at    http://127.0.0.1:8000/');


// 同步操作执行结果：
// 登录界面
// 同步方法执行完毕
// 主程序执行完毕


// 异步操作执行结果：
// 异步方法执行完毕
// 主程序执行完毕
// 登录界面