var app = angular.module("mainapp", ["ngResource",'ui.bootstrap','ui', 'ngDragDrop']);

app.config(function ($routeProvider) {
        $routeProvider.
            when('/posts', {templateUrl:"/assets/partials/posts.html", controller: 'PostsController'}).
            when('/tags', {templateUrl:"/assets/partials/tags.html", controller: 'TagsController'}).
            otherwise({redirectTo:'/posts'});
});
