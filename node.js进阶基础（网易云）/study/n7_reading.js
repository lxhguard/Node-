var http = require('http');
var optfile = require('./models/optfile');
http.createServer(function(request, response){
    response.writeHead(200, {'Content-type': 'imgage/jpeg'});
    if(request.url !== "/favicon.ico"){//清除第二次访问
        optfile.readImg('./imgs/pig.png',response);
        console.log("继续执行");
    }

}).listen(8000);
console.log('Server    running    at    http://127.0.0.1:8000/');
