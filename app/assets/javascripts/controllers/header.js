app.controller('HeaderController', function ($scope, $location, Tag) {
    $scope.routeIs = function(routeName) {
        return $location.path() === routeName;
    };

    $scope.toastr = toastr;

	$scope.tags = Tag.query(function(){ });
});
