/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function TransferCourseDetailController($log, $scope, $routeParams,$rootScope, growl, transferCourseService)
{
    var transferCourseId = $routeParams.transferCourseId;
    var transferCoursesPromise = transferCourseService.findTransferCourse(transferCourseId)

    transferCoursesPromise.then(function(response) {
        console.log(response);
        $scope.transferCourse = response;

    });
    transferCoursesPromise['catch']( function(errorData)
    {
        growl.addInfoMessage("The transferCourse" + transferCourseId + " could not be retrieved.", {ttl: 10000});
    });
}

TransferCourseDetailController.$inject=["$log","$scope", "$routeParams","$rootScope", "growl", "transferCourseService"];


