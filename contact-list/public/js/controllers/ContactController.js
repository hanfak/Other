contactListApp.controller('AppCtrl', ['$scope','$http', 'serviceList', function($scope, $http, serviceList) {
  console.log('hello from controller');

  // $scope.contactList = service.getAll();

  // $http.get('/file')
  //   .success(function(response) {
  //     console.log('Received data requested from server');
  //     $scope.contactList = response;
  //   })
  //   .error(function(data, status) {
  //     console.error('Repos error', status, data);
  //   });
}]);
