contactListApp.controller('AppCtrl', ['$scope','$http', function($scope, $http) {
  console.log('hello from controller');

  person1 = {
    name: 'person 1 name',
    email: 'person1@email.com',
    number: '111 111 1111'
  };

  person2 = {
    name: 'person 2 name',
    email: 'person2@email.com',
    number: '222 222 2222'
  };

  person3 = {
    name: 'person 3 name',
    email: 'person3@email.com',
    number: '333 333 3333'
  };

  var contactList = [person1, person2, person3];

  $scope.contactList = contactList;
}]);
