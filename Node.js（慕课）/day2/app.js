var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');

//创建服务
var app = express();//实例化对象

app.use(bodyparser.json());//对json参数的处理
app.use(bodyparser.urlencoded({extended:false}));

var stu = [
    {name:'www',age:20},
    {name:'rr',age:3},
    {name:'ttt',age:40}
]

app.post('/d',function(req,res){
    var name = req.body.name;
    var age  = req.body.age;

    var info = {
        name:name,
        age:age
    } 

    if(name && age)
    {
        stu.unshift(info);
        res.status(200).json({success:true,msg:'添加成功'});
    }else{
        res.status(200).json({success:false,msg:'添加失败'});
    }


})

app.get('/c/:id',function(req,res){
    var id = req.params.id;
    if(id>=0 && id<stu.length)
    {
        var info = stu[id];
        res.status(200).json({success:true,msg:'',obj:info})
    }else{
        res.status(200).json({success:false,msg:'查无此人',obj:{}})
    }
});

//用all(),无论用get/post都能请求，得到回应
app.all('/b',function(req,res){
    res.send('这是数据');
});

app.post('/a',function(req,res){
    res.status(200).send("这是post的数据");
});

//服务端的内容.get方式发起的请求，我们就执行下面的函数
app.get('/a',function(req,res){
    // res.send('这是get回来的数据 ');

    //返回一个json数据
    var stu = {name:'www',age:20};
    // res.status(200).json(stu);
    res.status(200).json({success:true,obj:stu});

})

app.use('/list',function(req,res){
    //'/detail'可以随便写，只要和浏览器url中的输入符合起来就行了
    //给客户端写东西应该调用响应的对象.. status()可以修改状态码
    res.sendFile(path.join(__dirname,'www','list.html'));
});
//use(路径，函数) 如果路径存在，就执行函数。不存在，就顺序执行。执行了其中一个use，后面就不会在执行了。   

//index.html默认的访问页面.static()路径给到文件夹就会自动读取index.html文件
app.use(express.static(path.join(__dirname,'www')));

app.use('*',function(req,res){
    res.status(200).sendFile(path.join(__dirname,'www','err','404.html'));
});


//后面的操作都会通过这个对象进行操作
app.listen(3000,function(err){
    if(err){
        console.log("监听失败");
        throw err;
    }
    console.log("服务器已开启，端口号为：3000");
});








