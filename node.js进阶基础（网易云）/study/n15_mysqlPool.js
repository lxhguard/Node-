var OptPool = require('./models/OptPool');


var optPool = new OptPool();
var pool = optPool.getPool();

//执行SQL语句:从连接池中获取一个连接
pool.getConnection(function(err,conn){
    //--插入
    var userAddSql = 'insert into user (uname,pwd) values(?,?)';
    var param = ['firstPool', 'firstPool'];
    conn.query(userAddSql, param, function (err, rs) {
        if (err) {
            console.log('insert err:', err.message);
            return;
        }
        console.log('insert success');
        
    });

    //查询
    conn.query('SELECT * from user', function (err, rs, fields) {
        if (err) {
            console.log('[query] - :' + err);
            return;
        }
        for (var i = 0; i < rs.length; i++) {
            console.log('The solution is:', rs[i].uname);
        }
        conn.release();//放回连接池
    });
});
