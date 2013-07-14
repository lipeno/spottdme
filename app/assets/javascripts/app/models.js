app.factory("Post", function($resource) {
    return $resource("/posts/:id", {id: "@id"}, {update: {method: "PUT"}});
});
