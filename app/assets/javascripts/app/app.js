var app = angular.module("mainapp", ["ngResource",'ui.bootstrap','ui', 'ngDragDrop']);

// Gets authentication token injected in the DOM
app.config(["$httpProvider", function(provider) {
  provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
}]);

app.config(function ($routeProvider) {
        $routeProvider.
//            when('/dashboard', {templateUrl:"/assets/partials/projects.html", controller: 'ProjectsController'}).
            when('/posts', {templateUrl:"/assets/partials/posts.html", controller: 'PostsController'}).
            otherwise({redirectTo:'/posts'});
});