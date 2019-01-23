//学习router.js在n5_readfile.js之前学习
//学习完n5之后，再回到router.js，将路由和读文件结合修改router.js
//把主文件写的写进router方法即写recall
var optfile = require('./models/optfile.js');
var url = require('url');
const querystring = require('querystring');

//写一个闭包，res会在闭包里面保存下来
function getRecall(req,res){
    function recall(data) {
        res.write(data);
        res.end('');//不写则没有http协议尾
    }
    return recall;
}

module.exports = {
    login:function(req,res){
        //-------------get方式接受参数---------------
        // var rdata = url.parse(req.url, true).query;//rdata是对象
        // console.log(rdata);
        // if(rdata['email'] != undefined){
        //     console.log(rdata['email']);
        //     console.log(rdata['pwd']);
        // }
        // recall = getRecall(req, res);
        // optfile.readfile('./views/login.html', recall);

        //------------post方式接收参数--------------
        var post = '';//定义了一个post变量，用于暂存请求体的信息
        req.on('data',function(chunk){//通过req的data事件监听
            post += chunk;
        })
        //------------注意异步----------------
        req.on('end', function(){
            post = querystring.parse(post);
            // console.log('email：'+ post['email']+'\n');
            // console.log('pwd：'+ post['pwd']+'\n');
            // recall = getRecall(req, res);

            arr = ['email', 'pwd'];
            function recall(data){
                dataStr = data.toString();
                for( var i=0; i<arr.length;i++)
                {
                    re = new RegExp('{'+arr[i]+'}','g');
                    dataStr = dataStr.replace(re, post[arr[i]]);
                }
                res.write(dataStr);
                res.end();
            } 
            optfile.readfile('./views/login.html', recall);
        })

       

    }, 
    zhuce: function (req, res) {
        recall = getRecall(req, res);
        optfile.readfile('./views/zhuce.html', recall);
    },
    writefile:function(req,res){
        recall = getRecall(req, res);
        optfile.writefile('./views/one.txt', '我的写入文件',recall);
    },
    showimg:function(req,res){
        res.writeHead(200, { 'Content-type': 'imgage/jpeg' });
        optfile.readImg('./imgs/pig.png', res);
    }

}