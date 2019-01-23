var fs = require('fs');

 module.exports = {
     readfileSync:function(path){//同步读取
        var data = fs.readFileSync(path,'utf-8');
        console.log(data);
        console.log("同步方法执行完毕");
        return  data;
     },
     readfile:function(path, recall){//异步执行
        fs.readFile(path, function (err, data) {
            if (err) {
                //异步操作出错，报错
                //防止的是router.js文件中的路径错误，即文件不存在
                console.log("optfile文件报错:" + err);
                recall('文件不存在');
            }else{
                console.log(data.toString());   
                recall(data);//去n5_readfile.js文件中读取且执行recall()
                //recall()是闭包函数，他会储存原来的response,
            }
        });
        console.log("异步方法执行完毕");
     },
     readImg:function(path,res){
         fs.readFile(path, 'binary', function(err, filedata){
             if(err){
                 console.log("optfile文件报错:"+err);
                 return;
             }else{
                 console.log("输出文件");
                 res.write(filedata,'binary');
                 res.end();
             }
         });
     },
     writefile:function(path, data, recall){
        fs.writeFile(path, data, function(err){
            if(err){
                throw err;
            }
            console.log("异步写文件完成");
            recall('写文件成功');
        });
     },
     writeFileSync:function(path,data){
         fs.writeFileSync(path,data);
         console.log("同步写完成");
     }
 }