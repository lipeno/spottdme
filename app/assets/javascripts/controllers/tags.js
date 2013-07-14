app.controller('TagsController', function ( $scope, $location, Tag) {
    // Define persisted object
    $scope.tags = Tag.query(function(){

    });

    $scope.$watch('tags', function() {
    }, true);
});

