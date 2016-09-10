contactListApp.controller('AppCtrl', ['$scope', 'serviceList', function($scope, serviceList) {
  console.log('hello from controller');

  serviceList.getAll().then(function(response) {
    $scope.contactList = response.data;
  });


  // $http.get('/file')
  //   .success(function(response) {
  //     console.log('Received data requested from server');
  //     $scope.contactList = response;
  //   })
  //   .error(function(data, status) {
  //     console.error('Repos error', status, data);
  //   });
}]);
