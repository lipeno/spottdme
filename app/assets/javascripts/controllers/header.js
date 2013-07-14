app.controller('HeaderController', function ($scope, $location, Tag) {
    $scope.routeIs = function(routeName) {
        return $location.path() === routeName;
    };

    $scope.toastr = toastr;

	$scope.tags = Tag.query(function(){ });

    $scope.searchEntered = false;
    $scope.searchTags =function(word){
        $scope.tagsToDisplay = [];
        $scope.tagsToDisplay.push(word);
        $scope.searchEntered = true;
    };
});
