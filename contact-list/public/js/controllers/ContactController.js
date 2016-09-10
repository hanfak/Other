contactListApp.controller('AppCtrl', ['$scope','$http', function($scope, $http) {
  console.log('hello from controller');

  $http.get('/contactList');
}]);
