require("../../bower_components/zepto/zepto.js");
require("../../bower_components/angular/angular.js");

backendCtrl = angular.module('app',[]).controller('backendCtrl',['$scope',function($scope){
    var refrash = function() {
        $.get("/portal/backend/",function(data){
            if(data.error_no == '1') {
                location.href = '/login.html';
            }
            else {
                $scope.data = data.data;
                $scope.$apply();
            }
        });
    };
    refrash();
    $scope.download = function() {
        $.get("/portal/download/",function(data){
            if(data.error_no == '0') {
                location.href = data.file;
            }
        });
    };
}]);

backendCtrl.$inject = ['$scope','backendCtrl'];
