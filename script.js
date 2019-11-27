var app = angular.module("slick-example", ["slick"]);

app.controller('appController', function($scope){
  $scope.data = [{
      value:100
  },
  {
      value: 50
  },
  {
      value: 30
  }];
});
