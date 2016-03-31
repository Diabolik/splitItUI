/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function TransferCourseSaveController($log, $scope, $location, $routeParams,$rootScope, growl, transferCourseService)
{

    $scope.save = function(transferCourse) {
        transferCourse.agreementId = $rootScope.agreementId;
        transferCourse.equivalencyId = $rootScope.equivalencyId;
        var transferCoursesPromise = transferCourseService.saveTransferCourse(transferCourse);

        transferCoursesPromise.then(function(response) {
            $rootScope.infoMessage = "The transferCourse was saved successfully.";
            $location.path("/equivalencies/" + $rootScope.equivalencyId );
        });
        transferCoursesPromise['catch']( function(errorData)
        {
            growl.addInfoMessage("The transferCourse could not be saved.", {ttl: 10000});
        });

    };
}
TransferCourseSaveController.$inject=["$log","$scope", "$location", "$routeParams","$rootScope", "growl", "transferCourseService"];

