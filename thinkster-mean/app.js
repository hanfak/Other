var app = angular.module('haddit', []);

app.controller('MainCtrl' ,
  ['$scope',
    function($scope){
      $scope.test = 'Hello World';

      $scope.posts = [
        {title: 'post 1', upvotes: 5},
        {title: 'post 2', upvotes: 2},
        {title: 'post 3', upvotes: 15},
        {title: 'post 4', upvotes: 9},
        {title: 'post 5', upvotes: 4}
      ];

      $scope.addPost = function() {
        if(!$scope.title || $scope.title === '') { return; }
        //Although posts does not have link ref, method will create new object with it
        $scope.posts.push({title: $scope.title, link: $scope.link , upvotes: 2});
        $scope.title = '';
        $scope.link = '';
      };

      $scope.incrementUpvotes = function(post) {
        post.upvotes++;
      };
    }
]);
