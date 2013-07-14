var app = angular.module("mainapp", ["ngResource",'ui.bootstrap','ui', 'ngDragDrop', 'FacebookPluginDirectives']);

app.config(function ($routeProvider) {
        $routeProvider.
//            when('/dashboard', {templateUrl:"/assets/partials/projects.html", controller: 'ProjectsController'}).
            when('/posts', {templateUrl:"/assets/partials/posts.html", controller: 'PostsController'}).
            otherwise({redirectTo:'/posts'});
});
