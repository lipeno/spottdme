app.factory("Post", function($resource) {
    return $resource("/posts/:id", {id: "@id"}, {update: {method: "PUT"}});
});
app.factory("Tag", function($resource) {
    return $resource("/tags/:id", {id: "@id"}, {update: {method: "PUT"}});
});
