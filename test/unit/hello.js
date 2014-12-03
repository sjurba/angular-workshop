'use strict';
describe('Hello world app', function(){

  beforeEach(function(){
    module('helloApp');
  });

  describe('Hello controller', function(){

    var scope;

    beforeEach(inject(function($controller){
      scope = {};
      $controller('HelloController', {
        $scope: scope
      });
    }));

    it('should init person on scope', function(){
      expect(scope.person).toEqual({});
    });

    it('should add person to list', function(){
      var person = {name: 'Sjur', email: 'sjurba@gmail.com', phone: '999999'};
      scope.person = person;
      scope.addPersonToList();
      expect(scope.list).toContain(person);
    });
  });

  describe('secret filter', function(){
    var secret;

    beforeEach(inject(function(secretFilter){
      secret = secretFilter;
    }));

    it('should replace name with **', function(){
      expect(secret('foo@bar')).toEqual('***@bar');
    });
  });

});
