contactListApp.service('serviceList', ['$http', function($http) {
  console.log('hello from service');
  this.getAll = function() {
    $http.get('/file')
      .success(function(response) {
        console.log('Received data requested from server');
        return response;
      })
      .error(function(data, status) {
        console.error('Repos error', status, data);
      });
  };

}]);
