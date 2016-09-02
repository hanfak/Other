var app = angular.module('haddit', []);

app.controller('MainCtrl' ,
  ['$scope',
    function($scope){
      $scope.test = 'Hello World';
    }
]);
