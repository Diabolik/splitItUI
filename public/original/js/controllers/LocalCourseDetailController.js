/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function LocalCourseDetailController($log, $scope, $routeParams,$rootScope, growl, localCourseService)
{
    var localCourseId = $routeParams.localCourseId;
    var localCoursesPromise = localCourseService.findLocalCourse(localCourseId)

    localCoursesPromise.then(function(response) {
        console.log(response);
        $scope.localCourse = response;

    });
    localCoursesPromise['catch']( function(errorData)
    {
        growl.addInfoMessage("The localCourse" + localCourseId + " could not be retrieved.", {ttl: 10000});
    });
}

LocalCourseDetailController.$inject=["$log","$scope", "$routeParams","$rootScope", "growl", "localCourseService"];


