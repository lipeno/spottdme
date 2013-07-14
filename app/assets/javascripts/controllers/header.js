app.controller('HeaderController', function ($scope, $location) {
    $scope.routeIs = function(routeName) {
        return $location.path() === routeName;
    };

    $scope.toastr = toastr;
});
