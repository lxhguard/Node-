var myapp = angular.module('myapp',['ui.router']);
myapp.config(['$stateProvider','$urlRouterProvider',
    function($stateProvider,$urlRouterProvider){

        $stateProvider.state('home',{
            url:'/home',
            views:{
                head:{
                    template:'<h1>头部的内容</h1>'
                },
                body:{
                    templateUrl:'./views/body.main.tpl.html',
                    controller:"body.main.ctrl"
                },
                food:{
                    template:'<h1>页脚的内容</h1>'
                }
            }
        })

        $urlRouterProvider.otherwise('/home');


}]);

myapp.controller("body.main.ctrl",[])







