hadditApp.controller('PostsCtrl', [
'$scope',
'$stateParams',
'postFactory',
function($scope, $stateParams, postFactory){
  $scope.test ='werwqrqr';
  $scope.post = postFactory.posts[$stateParams.id];
  $scope.incrementUpvotes = function(comment) {
    comment.upvotes++;
  };
}]);
