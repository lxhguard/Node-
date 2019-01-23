在n12.js中讲解异步流程控制，需要下载
cnpm install async --save-dev

在n14.js中需要 cnpm install mysql
然后打开mysql输入 
create table user(
uid int not null primary key auto_increment,
uname varchar(100) not null,
pwd varchar(100) not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
需要启动mysql才行。我这里用的是启动wamp，因为我本地的mysql不知道什么原因启动不了。
