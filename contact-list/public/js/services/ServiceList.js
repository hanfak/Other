contactListApp.service('serviceList', ['$http', function($http) {
  console.log('hello from service');

  this.getAll = function() {
    return $http.get('/db')
      .then(function(response) {
        console.log('Received data requested from server');
        return response;
      },
      function(error) {
        console.error('Repos error', error.status, error.data);
      });
  };
}]);