hadditApp.controller('MainCtrl' ,
  ['$scope', 'postFactory',
    function($scope, postFactory){
      $scope.test = 'Hello World';
      $scope.posts = postFactory.posts;

      $scope.addPost = function() {
        if(!$scope.title || $scope.title === '') { return; }

        $scope.posts.push({title: $scope.title,
                          link: $scope.link,
                          upvotes: 2});
        $scope.title = '';
        $scope.link  = '';
      };

      $scope.incrementUpvotes = function(post) {
        post.upvotes++;
      };
    }
]);
