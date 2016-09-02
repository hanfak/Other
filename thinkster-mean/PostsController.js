hadditApp.controller('PostsCtrl', [
'$scope',
'$stateParams',
'postFactory',
function($scope, $stateParams, postFactory){
  $scope.post = postFactory.posts[$stateParams.id];

  $scope.incrementUpvotes = function(comment) {
    comment.upvotes++;
  };

  $scope.addComment = function() {
    if($scope.body === '') { return; }

    $scope.post.comments.push({
      body: $scope.body,
      author: 'Annoymous',
      upvotes: 0
    });
    $scope.body = '';
    };
}]);
