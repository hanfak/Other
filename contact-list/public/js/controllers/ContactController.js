contactListApp.controller('AppCtrl', ['$scope', 'serviceList', function($scope, serviceList) {
  console.log('hello from controller');

  serviceList.getAll().then(function(response) {
    $scope.contactList = response.data;
  });
}]);
