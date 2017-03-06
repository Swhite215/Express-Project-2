var app = angular.module('myModule', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/lyric', {
      controller: 'getControl',
      templateUrl: 'lyrics.html'
    });

    $locationProvider.hashPrefix('');
});
