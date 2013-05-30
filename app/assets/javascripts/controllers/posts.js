app.controller('PostsController', function ( $scope, $location, Post) {
    // Define persisted object
    $scope.posts = Post.query(function(){

    });


    $scope.$watch('posts', function() {
    }, true);

    $scope.newPost = "";

    $scope.addPost = function() {
        if ( !$scope.newPost.length ) {
            return;
        }
        var newPost = new Post();
        newPost.text = $scope.newPost;
        $scope.posts.push(newPost);
        newPost.$save(newPost);

        $scope.newPost = '';
    };

    $scope.isOdd =  function(post) {
            if (post.id % 2) {
                return true;
            }
            return false;
    };
});

