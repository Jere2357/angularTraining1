myApp.controller("View3Controller", ["$scope", function($scope) {
    $scope.user = {};

    $scope.onSubmit = () => {
        console.log($scope.user);
        $scope.user = {};
    };
}]);
