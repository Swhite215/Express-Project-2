var app = angular.module("myModule");

app.controller("getControl", function($scope, $http) {
  $scope.array = [];

  $http({
    method: 'GET',
    url: '/lyric'
  }).then(function successfulCallback(response) {
    console.log(response);
    $scope.array = response.data;
  }, function(error) {
    console.log(error);
  });

  $scope.practice = 'practice';
});
