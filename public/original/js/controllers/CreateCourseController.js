/*
 *
 *  * *******************************************************************************
 *  *   Copyright  2015 Ellucian Company L.P. and its affiliates.
 *  * *******************************************************************************
 *
 */

function CreateCourseController($log, $scope, $routeParams, $rootScope,$modal,  growl, courseService, $location) {
    $scope.requestId = $routeParams.requestId;
    $scope.institutionId = $routeParams.institutionId;
    $scope.transcriptId = $routeParams.transcriptId;
    $scope.sessionId = $routeParams.sessionId;
    $scope.course = {};

    $scope.openDialog = function () {
        var modalInstance = $modal.open({
            animation: false,
            templateUrl: 'partials/courseLevelTemplate.html',
            controller: 'courseLevelMapDetailController',
            size: 'lg',
            resolve: {
                selectedCode: function(){ return $scope.course.courseLevel}
            }
        });
    }

    $scope.createCourse = function (courseToBeCreated) {
        var coursePromise = courseService.save($scope.transcriptId, $scope.sessionId, courseToBeCreated);

        coursePromise.then(function (response) {
            $rootScope.infoMessage = "The course was saved successfully.";
            $location.path("/requests/" + $scope.requestId);

        });
        coursePromise['catch'](function (errorData) {
            growl.addErrorMessage("The course could not be saved.", {ttl: 10000});
        });
    };

}
CreateCourseController.$inject = ["$log", "$scope", "$routeParams", "$rootScope", "$modal", "growl", "courseService", "$location"];