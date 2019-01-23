var fs = require('fs');//文件

// //1.同步写(三个参数). 如果文件不存在，会创建一个新文件
// console.log('111');
// var  res = fs.writeFileSync('./static/w1.txt','第一个文字','utf8');

// console.log(res);
// //返回undefined才会成功

// console.log('222');



//2.异步写(四个参数，多了回调函数)
// console.log('111');
// fs.writeFile('./static/ti.txt','1111111','utf8',function(err){
//     console.log(err);
//     //返回null才会成功
//     if(err)
//     {
//         console.log("写入失败");
//         throw err;
//     }
//     console.log("写入成功");
// });
// console.log('222');



//3.读文件
// var data = fs.readFileSync('./static/w1.txt','utf8');
// console.log(data);

// //异步读
// fs.readFile('./static/w1.txt','utf8',function(err,data){
//     // console.log(err);
//     // console.log(data.toString());
//     if(err){
//         console.log("读出错");
//         throw err;
//     }
//     console.log(data.toString());
// });


//4.判断文件是否存在
//同步
// var res  = fs.existsSync('./static/index.html');
// console.log(res);
// //异步
// fs.exists('./static/w1.txt',function(res){
//     console.log(res);
// })

// //var res = fs.appendFileSync('./static/log.txt','\n 这是添加的内容'+ new Date(),'utf8');
// fs.appendFile('./static/log.txt','\n 这是异步的数据'+ new Date(),function(err){
    
//     if(err){
//         console.log("添加失败");
//         throw err;
//     }
//     console.log("添加成功");
// })


//监听文件，文件中的内容发生改变可以做function
fs.watchFile('./static/t1.txt',function(a,b){
    console.log("a="+a);
    console.log("b="+b);
})






