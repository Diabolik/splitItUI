/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */


console.log("CourseLevelMapDetailController");

function CourseLevelMapDetailController(CourseLevelMapService, CourseLevelService, InstitutionService,  growl, $rootScope,$scope, $location, $modalInstance,selectedCode) {

    /*
     * expose Anonymous  functions here:
     */
    $scope.initData = function () {
        CourseLevelService.listAll().then(function (response) {
            $scope.courseLevelList = response;
        });

    }

    $scope.save = function () {
        CourseLevelMapService.save($scope.courseLevelMap)
            .then(function (response) {
                $rootScope.infoMessage = "Course Level Map save success"
            }, function (errorData) {
                if(errorData.status=="409") {
                    growl.addInfoMessage("Course Level Map combination for this course level already exist.", {ttl: 10000});
                }
                else{
                    growl.addInfoMessage("Course Level Map save failed.", {ttl: 10000});
                }

            });

        $modalInstance.close();
    }


    $scope.cancel = function()
    {
        $modalInstance.close();
    }

    //executed when ctrlr is instantiated
    $scope.courseLevelMap = {}
    $scope.courseLevelMap.destinationInstitutionId = $rootScope.tr_destinationInstitutionId
    $scope.courseLevelMap.sourceInstitutionId = $rootScope.tr_sourceInstitutionId
    $scope.courseLevelMap.code= selectedCode

    //Retrieving the data from the server.
    $scope.initData();
}
CourseLevelMapDetailController.$inject = ["courseLevelMapService", "courseLevelService", "institutionService", "growl", "$rootScope", "$scope","$location", "$modalInstance", "selectedCode"];