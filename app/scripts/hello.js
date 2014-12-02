'use strict';
var app = angular.module('helloApp', []);
app.controller('HelloController',
  function($scope){
    $scope.yourName = 'World';
    $scope.list = [];
    $scope.addNameToList = function(){
      $scope.list.push($scope.yourName);
      $scope.yourName = '';
    };
  }
);
