'use strict';
var app = angular.module('helloApp', ['firebase']);
app.controller('HelloController',
  function($scope, Persons){
    $scope.person = {};
    $scope.list = Persons;
    $scope.addPersonToList = function(){
      $scope.list.$add($scope.person);
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

app.directive('helloPerson', function(){
   return {
     restrict: 'E',
     scope: {
       person: '='
     },
     templateUrl: 'partials/hello.html'
   };
 });

 app.directive('red', function(){
   return {
     restrict: 'A',
     link: function(scope, element) {
       element.css({'color': 'red'});
     }
   };
 });
 app.value('fbURL', 'https://webstep-angular-ws.firebaseio.com/');

 app.factory('Persons', function($firebase, fbURL) {
   return $firebase(new Firebase(fbURL)).$asArray();
 });
