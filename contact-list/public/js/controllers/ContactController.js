contactListApp.controller('AppCtrl', ['$scope','$http', function($scope, $http) {
  console.log('hello from controller');

  $http.get('/file')
    .success(function(response) {
      console.log('Received data requested from server');
      $scope.contactList = response;
    })
    .error(function(data, status) {
      console.error('Repos error', status, data);
    });
}]);
