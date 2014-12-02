'use strict';
var app = angular.module('helloApp', []);
app.controller('HelloController',
  function($scope){
    $scope.person = {};
    $scope.list = [];
    $scope.addPersonToList = function(){
      $scope.list.push($scope.person);
      $scope.person = {};
    };
  }
);
