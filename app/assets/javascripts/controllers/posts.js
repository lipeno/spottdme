app.controller('PostsController', function ( $scope, $location, Post) {
    // Define persisted object
    $scope.posts = Post.query(function(){
        $scope.sortPosts();
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
        newPost.$save(newPost);

        newPost.id = findMaxId($scope.posts) + 1;

        $scope.posts.push(newPost);
        $scope.sortPosts();
        $scope.newPost = '';
    };

    findMaxId = function(arr) {
        var max = arr[0].id;
        var len = arr.length;
        for (var i = 1; i < len; i++) {
            if (arr[i].id > max) {
                max = arr[i].id;
            }
        }
        return max;
    }

    $scope.sortPosts = function() {
        $scope.posts = $scope.posts.sort(function (a, b) {
            return b.id - a.id
        });
    };

    $scope.isOdd =  function(post) {
            if (post.id % 2) {
                return true;
            }
            return false;
    };
});

