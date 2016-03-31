/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */

/**
 * Angular controller to retrieve course level data.
 * @param $log
 * @param $scope
 * @param $rootScope
 * @param $route
 * @param $location
 * @param courseLevelService
 * @constructor
 */
function CourseLevelController($log, $scope, $rootScope, $route, $location,$routeParams, courseLevelService, courseLevelMapService)
{
    var courseLevelPromise = courseLevelService.listAll();
    courseLevelPromise.then(function(response) {
        $scope.courselevels = response;
    });
    $scope.selectedCourseLevel= $rootScope.courseLevel;

    $scope.translateCourseLevel = function(course) {
        var institutionId = $rootScope.tr_destinationInstitutionId;
        var srcInstitutionId = $rootScope.tr_sourceInstitutionId
        var levelCode = course.courseLevel

        course.localLevel = {}
        var courseLevelMapPromise = courseLevelMapService.translateCourseLevelCode(institutionId,srcInstitutionId,levelCode);
        courseLevelMapPromise.then(function(response) {
         course.localLevel= response;
         });
    }

}
CourseLevelController.$inject=["$log","$scope","$rootScope", "$route", "$location","$routeParams","courseLevelService", "courseLevelMapService"];
