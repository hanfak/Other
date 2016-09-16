var contactListApp = angular.module('contactListApp', ['ui.router' ,
    "ngResource"]);

contactListApp.config(['$stateProvider',"$locationProvider", '$urlRouterProvider',
function($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $stateProvider
  .state("home", {
      url:      "/",
      templateUrl: "../index.html",
      controller:   "AppCtrl"
    });
  // $stateProvider
  //   .state('home', {
  //     url: '/',
  //     templateUrl: '../index.html',
  //     controller: 'AppCtrl'
  //   });
    // .state('posts', {
    // 		url : '/posts/:id',
    // 		templateUrl : '../javascripts/templates/posts/show.html',
    // 		controller : 'PostsCtrl',
    //     resolve: {
    //       post: ['$stateParams','postFactory', function($stateParams, postFactory){
    //         return postFactory.get($stateParams.id);
    //       }]
    //     }
    // 	});
    }]);
