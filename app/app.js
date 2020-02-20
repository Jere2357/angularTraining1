'use strict';

// Declare app level module which depends on views, and core components
let myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.when('/view3',{
    templateUrl: "view3/view3.html",
    controller: "View3Controller"
  }).otherwise({redirectTo: '/view1'});
}]);
