var User = require("./User");
function Teacher(id,name,age){
    User.apply(this,[id,name,age]);//Teacher继承了User，可以实现多继承
    this.teach = function(res){
        res.write(this.name+"讲课");
    }

}

module.exports = Teacher;