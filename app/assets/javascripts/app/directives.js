'use strict';

/**
 * Directive that executes an expression when the element it is applied to loses focus.
 */
app.directive('todoBlur', function() {
    return function( scope, elem, attrs ) {
        elem.bind('blur', function() {
            scope.$apply(attrs.todoBlur);
        });
    };
});

app.directive ('unfocus', function() { return {

    restrict: 'A',
    link: function (scope, element, attribs) {

        element[0].focus();

        element.bind ("blur", function() {
            scope.$apply(attribs["unfocus"]);
            console.log("??");
        });

    }

}});

/**
 * Directive that places focus on the element it is applied to when the expression it binds to evaluates to true.
 */
app.directive('todoFocus', function( $timeout ) {
    return function( scope, elem, attrs ) {
        scope.$watch(attrs.todoFocus, function( newval ) {
            if ( newval )
            {
                $timeout(function()
                {
                    elem[0].focus();

                }, 0, false);
            }
        });
    };
});

//// you can use it by calling tags-input
//app.directive('tagsInput', function() {
//    return {
//        // Restrict it to be an attribute in this case
//        restrict: 'A',
//        // responsible for registering DOM listeners as well as updating the DOM
//        link: function($scope, element, attrs) {
//            $(element).tagsInput($scope.$eval(attrs.tagsInput));
//        }
//    };
//});

app.directive('tagInput', function(){
    return {
        restrict: 'E',
        template: '<input type="hidden" placeholder="Input tags here...">',
        replace: true,
        require: '?ngModel',
        link: function ( scope, element, attrs, ngModel ){

            var drivenByModel = false;
            var elemClass = attrs.class;

            $(element).select2({
                tags: [],
                tokenSeparators: [","],
                containerCssClass : elemClass,
                formatNoMatches: function(){ return '';}
            }).on('change', function(e){
                    if (!drivenByModel) {
                        ngModel.$setViewValue(JSON.stringify(e.val));
                        scope.$apply();
                    } else {
                    }
                    drivenByModel = false;
                });


            ngModel.$render = function(){
                drivenByModel = true;
                if (ngModel.$viewValue){
                    var data = JSON.parse(ngModel.$viewValue);
                    $(element).val(data).trigger('change');
//                  Add class which was specified in the element
                    if(!$(element).hasClass(elemClass)){
                        $(element).addClass(elemClass);
                    }
                }
            };
        }
    };
});

// Highcharts directive
app.directive('chart', function () {
        return {
            restrict: 'E',
            template: '<div></div>',
            transclude:true,
            replace: true,

            link: function (scope, element, attrs) {
                var chartsDefaults = {
                    chart: {
                        renderTo: element[0],
                        type: attrs.type || null,
                        height: attrs.height || null,
                        width: attrs.width || null
                    }
                };

                //Update when charts data changes
                scope.$watch(function() { return attrs.value; }, function(value) {
                    if(!attrs.value) return;
                    // We need deep copy in order to NOT override original chart object.
                    // This allows us to override chart data member and still the keep
                    // our original renderTo will be the same
                    var deepCopy = true;
                    var newSettings = {};
                    $.extend(deepCopy, newSettings, chartsDefaults, JSON.parse(attrs.value));
                    var chart = new Highcharts.Chart(newSettings);
                });
            }
        }
});

app.directive("fbComments", function() {
    return {
        restrict: 'C',
        link: function(scope, element, attributes) {
            var doTheMagic = function () {
                return typeof FB !== "undefined" && FB !== null ? FB.XFBML.parse(element.parent()[0]) : void 0;
            }

            attributes.$observe("fbComments", doTheMagic);

        }
    };
});

app.directive('tagManager', function() {
    return {
        restrict: 'E',
        scope: { tags: '=' },
        template:
            '<div class="tags">' +
                '<a ng-repeat="(idx, tag) in tags" class="tag" ng-click="remove(idx)">{{tag}}</a>' +
                '</div>',
        link: function ( $scope, $element ) {
            // FIXME: this is lazy and error-prone
            var input = angular.element( $element.children()[1] );

            // This adds the new tag to the tags array
            $scope.add = function() {
                $scope.tags.push( $scope.new_value );
                $scope.new_value = "";
            };

            // This is the ng-click handler to remove an item
            $scope.remove = function ( idx ) {
                $scope.tags.splice( idx, 1 );
            };

            // Capture all keypresses
            input.bind( 'keypress', function ( event ) {
                // But we only care when Enter was pressed
                if ( event.keyCode == 13 ) {
                    // There's probably a better way to handle this...
                    $scope.$apply( $scope.add );
                }
            });
        }
    };
});

