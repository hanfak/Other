contactListApp.controller('AppCtrl', ['$scope', 'serviceList','$http', function($scope, serviceList,$http) {
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

  $scope.removeContact = function(id) {
    console.log(id);
    serviceList.removeContact(id).then(refresh);
  };

  $scope.editContact = function(id) {
  	console.log(id);
  	serviceList.editContact(id).then(function(response){
      console.log('cont ' + response.data);
      $scope.contact = response.data;
  });

  $scope.updateContact = function() {
    console.log($scope.contact._id);
    $http.put('/db/' + $scope.contact._id, $scope.contact);
  };
};
}]);
