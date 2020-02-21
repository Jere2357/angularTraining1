'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'forecast', function($scope, forecast) {

  $scope.walletData = [];

  $scope.items = forecast.then(({data}) => {
    return data;
  });

  $scope.showTable = forecast.then(({data}) => {
    $scope.walletData = data;
    console.log($scope.walletData);
    return $scope.walletData;
  });
}])
  .factory('forecast', ['$http', function ($http) {  // forecast name of the service

  return $http.get('http://localhost:8080/wallet/records')
      .then(successCallback, errorCallback);

  function successCallback(data) {
    return data;
  }
  function errorCallback(error) {
    return error;
  }

}]);

