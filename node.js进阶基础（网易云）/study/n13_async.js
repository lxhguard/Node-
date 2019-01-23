//塑造异步使用定时器(两种):setTimeout执行一次,setInterval每个时间间隔执行一次
var async = require('async');
function oneFun()
{
    // setTimeout(() => {
        
    // }, 1000);
    ii = 0;
    setInterval(() => {
        console.log("aaa=" + new Date());
        ii++;
        if (ii == 3) {
            clearInterval(this);
        }
    }, 1000);
    console.log("oneFun");
}
function twoFun()
{
    jj = 0;
    setInterval(() => {
        console.log("bbb="+new Date());
        jj++;
        if(jj == 3)
        {
            clearInterval(this);
        }
    }, 1000);
    console.log("oneFun执行完毕");
}
// oneFun();
// twoFun();

function exec(){ 
    async.series(
        {
            one:function(done){
                //有点小问题，one这个会一直执行下去，没找到bug
                iii = 0;
                setInterval(() => {
                    console.log("a iii=" + iii);
                    console.log("aaa=" + new Date());
                    iii++;
                    if (iii == 3) {
                        clearInterval(this);
                        console.log("a this" + this);
                        done(null, 'one完毕');
                    }
                }, 1000);
                
            },
            two:function(done){
                jj = 0;
                setInterval(() => {
                    console.log("bbb=" + new Date());
                    jj++;
                    if (jj == 3) {
                        clearInterval(this);
                        done(null, 'two完毕');
                    }
                }, 1000);
                
            }
        },function(err,rs){
            console.log(err);
            console.log(rs);
        }
    )
}
exec();
console.log("主进程执行完毕");