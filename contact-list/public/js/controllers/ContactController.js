contactListApp.controller('AppCtrl', ['$scope', 'serviceList', function($scope, serviceList) {
  console.log('hello from controller');


  var refresh = function() {
    serviceList.getAll().then(function(response) {
      $scope.contactList = response.data;
    });
    $scope.contact = "";
  };

  refresh();

  $scope.addContact = function() {
    console.log($scope.contact);
    serviceList.postContact($scope.contact).then(refresh);
  };
}]);
