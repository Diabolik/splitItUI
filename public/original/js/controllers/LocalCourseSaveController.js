/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function LocalCourseSaveController($log, $scope, $location, $routeParams,$rootScope, growl, localCourseService)
{

    $scope.save = function(localCourse) {
        var message = localCourseService.validateLocalCourse(localCourse);
        if(message){
            growl.addInfoMessage(message, {ttl: 20000});
        }
        else {
            localCourse.agreementId = $rootScope.agreementId;
            localCourse.equivalencyId = $rootScope.equivalencyId;
            var localCoursesPromise = localCourseService.saveLocalCourse(localCourse);

            localCoursesPromise.then(function (response) {
                $rootScope.infoMessage = "The localCourse was saved successfully.";
                $location.path("/equivalencies/" + $rootScope.equivalencyId);
            });
            localCoursesPromise['catch'](function (errorData) {
                growl.addInfoMessage("The localCourse could not be saved.", {ttl: 10000});
            });
        }
    };
}
LocalCourseSaveController.$inject=["$log","$scope", "$location", "$routeParams","$rootScope", "growl", "localCourseService"];

