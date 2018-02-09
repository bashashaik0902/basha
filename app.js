var app= angular.module("myApp",[]);
app.controller("myCtr",["$scope",($scope)=>{
    $scope.users= [
    {
        name: "basha",
        age: 23
    },
    {
        name: "roshan",
        age: 36
    },
    {
        name: "ramesh",
        age:25 
    }
    ]
}]);
app.controller("deleteCtr",function($scope){
    $scope.favlanguage="none";

    $scope.php=function(){
        $scope.favlanguage="php";
    };
    $scope.java= function(){
        $scope.favlanguage="java";
    };
    $scope.python=function(){
        $scope.favlanguage="python";
    };
    $scope.js=function(){
        $scope.favlanguage="js";
    };
});

