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

  this.postContact = function(contact) {
    return $http.post('/db',contact)
    .then(function(response){
      console.log(response);
    },
    function(error) {
      console.error('Repos error', error.status, error.data);
    });
  };

  this.removeContact = function(id){
    return $http.delete("/db/" + id)
      .then(function(response){
        console.log(response);
      },
      function(error) {
        console.error('Repos error', error.status, error.data);
      });
  };

  this.editContact = function(id) {
    return $http.get('/db/' + id)
      .then(function(response) {
        return response;
    	},
      function(error) {
        console.error('Repos error', error.status, error.data);
      });
  };

  this.updateContact = function(id, contact){
    return $http.put('/db/' + id, contact)
      .then(function(response){
        console.log('put from service ' + response);
      });
  };
}]);
