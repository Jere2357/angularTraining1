'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'forecast', function($scope, forecast) {

  $scope.title = "hello world";

  $scope.loadForeCastData = () => {
    console.log("Entering load forecast");
    forecast.then((data) => {
      console.log(data);
    });
    console.log("Exit load forecast");
  };

  $scope.items = [
      "Item1",
      "Item2",
      "Item3",
      "Item4",
  ];

  $scope.showFlag = false;
  $scope.toggleShowTable = () => {
      $scope.showFlag = !$scope.showFlag;
  };
  $scope.inventories = [
    {
        name: "Piattos",
        manufacturer: "Jack n Jill",
        price: 20.0
    },
    {
      name: "Alibaba",
      manufacturer: "Jill",
      price: 2.0
    },
    {
      name: "Nova",
      manufacturer: "Jack n Jill",
      price: 10.0
    }
  ];
}])
  .factory('forecast', ['$http', function ($http) {  // forecast name of the service

  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json')
      .then(successCallback, errorCallback);

  function successCallback(data) {
    return data;
  }
  function errorCallback(error) {
    return error;
  }

}]);

