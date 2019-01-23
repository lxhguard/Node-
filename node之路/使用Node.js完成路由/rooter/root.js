// 加载所需模块
let http = require('http');
let url = require('url');
let fs = require('fs');

let host = '127.0.0.1';
let port = 8080;

http.createServer(function (req, res) {
    let pathname = url.parse(req.url).pathname;
    console.log('Request for ' + pathname + ' received.');
    function showPaper(path, status) {
        let content = fs.readFileSync(path);
        res.writeHead(status, { 'Content-Type': 'text/html;charset=utf-8' });
        res.write(content);
        res.end();
    }
    switch (pathname) {
        //'首页'
        case '/':
            showPaper('./index.html', 200);
            break;
        case '/home':
            showPaper('./home.html', 200);
            break;
        //'about页'
        case '/about':
            showPaper('./about.html', 200);
            break;
        //'404页'
        default:
            showPaper('./404.html', 404);
            break;
    }
}).listen(port, host);