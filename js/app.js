var app = angular.module('SuggestionsApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    controller: 'SuggestionController',
    templateUrl: 'views/home.html'
  })
  .when('/suggestion/:id',{
    controller: 'PostController',
    templateUrl: 'views/post.html'
  }) 
  .otherwise({
    redirectTo: '/'
  })
})