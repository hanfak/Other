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
        // Prevent user from adding blank title
        if(!$scope.title || $scope.title === '') { return; }

        $scope.posts.push({title: $scope.title, upvotes: parseInt($scope.upvote)});
        $scope.title = '';
        $scope.upvote = '';
      };
    }
]);
