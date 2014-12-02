'use strict';
var app = angular.module('helloApp', []);
app.controller('HelloController',
  function($scope){
    $scope.yourName = 'World';
  }
);
