//nodejs创建Web服务器

var http = require('http');
var fs = require('fs');
var url = require('url');

//创建服务器
http.createServer(function (request, response) {
    //解析请求，包括文件名
    var pathname = url.parse(request.url).pathname;
    //输出请求的文件名
    console.log("Request for " + pathname + "  received.");
    //当请求static文件夹时，设置文件返回类型是text/css
    var firstDir = pathname && pathname.split('/')[2];
    var ContentType = null;
    if (firstDir && firstDir === 'static') {
        ContentType = { 'Content-Type': 'text/css' };
    } else {
        ContentType = { 'Content-Type': 'text/html' }
    }

    //从文件系统中去请求的文件内容
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            //HTTP 状态码 404 ： NOT FOUND
            //Content Type:text/plain
            response.writeHead(404, { 'Content-Type': 'text/html' });
        }
        else {
            //HTTP 状态码 200 ： OK
            //Content Type:text/plain
            response.writeHead(200, ContentType);

            //写会回相应内容
            response.write(data.toString());
        }
        //发送响应数据
        response.end();
    });
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');