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
app.filter('secret', function(){
  return function(value, symbol){
    symbol = symbol || '*';
    var parts = value.split('@');
    parts[0] = parts[0].replace(/./g, symbol);
    return parts.join('@');
  };
});
