/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */

/**
 * Angular controller to retrieve the local course level data.
 * @param $log
 * @param $scope
 * @param $rootScope
 * @param $route
 * @param $location
 * @param articulationCourseLevelService
 * @constructor
 */
function ArticulationCourseLevelController($log, $scope, $rootScope, $route, $location, articulationCourseLevelService)
{
    var articulationCourseLevelPromise = articulationCourseLevelService.listAll();
    articulationCourseLevelPromise.then(function(response) {
        response.splice(0,0,{id:"-1", code:"", description:""})
        $scope.articulationCourseLevels = response;
        $rootScope.articulationCourseLevels = response;
    });
    $scope.selectedArticulationCourseLevel= $rootScope.articulationCourseLevels;
    $scope.setArticulationCourseLevel = function(newArticulationCourseLevel) {
        $scope.selectedArticulationCourseLevel = newArticulationCourseLevel;
        $rootScope.articulationCourseLevels = newArticulationCourseLevel;
    }

}
ArticulationCourseLevelController.$inject=["$log","$scope","$rootScope", "$route", "$location","articulationCourseLevelService"];
