/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function EquivalencyOverrideController($log, $scope, $location, $routeParams, $rootScope, growl, equivalencyOverrideService) {

    $scope.saveOverrideSelection = function (studentCourse, equivalency, redirectToRequest, reArticulate) {
        var overridePetition = {studentCourseIdList: [studentCourse.id], equivalencyId: equivalency.id, creationReason: "DECISION_TAKEN"}

        equivalencyOverrideService.saveOverrideSelection(overridePetition).then(function (response) {
            growl.addInfoMessage("The selection was saved successfully.", {ttl: 10000});

            if (redirectToRequest == true) {
                $location.path("/requests/" + $rootScope.requestId);
            }

            if (reArticulate == true) {
                $rootScope.$emit('requestArticulation');
            }
        }).catch(function (errorData) {
            growl.addInfoMessage("The selection could not be saved.", {ttl: 10000});
        });
    }

    /**
     * Forwards to resolve undecided screen
     * @param studentCourse
     * @param equivalencyList
     */
    $scope.forwardToResolveUndecided = function (studentCourse, equivalencyList) {
        $rootScope.studentCourseList = [studentCourse]
        $rootScope.equivalencyList = equivalencyList
        $location.path("requests/" + $rootScope.requestId + "/resolveUndecidedArticulation")
    }

    /**
     * Retrieves the equivalency to edit from backend
     * @param studentCourse
     * @param equivalencyList
     */
    $scope.forwardToEquivalencyOverrideEdit = function (studentCourseList, equivalencyId , editTransferCourses) {

        var transcriptCourseIdList = []

        for(var index = 0; index < studentCourseList.length; index++)
        {
            transcriptCourseIdList.push(studentCourseList[index].id)
        }

        //retrieve the equivalency to edit from backend
        //backend takes care of fidning the equvioalency override for the courses,
        // or creating a new equivalency if necessary,
        var overridePetition = {studentCourseIdList: transcriptCourseIdList, equivalencyId: equivalencyId, creationReason: "OVERRIDE_MATCHED"}

        equivalencyOverrideService.retrieveOrCreateEquivalency(overridePetition).then(function (response) {

            $rootScope.equivalency = response;

            if (editTransferCourses == true) {
                //forward to edit equivalency - Edit full equivalency
                $location.path("/equivalencyOverride/editFullEquivalency" );
            }
            else {
                //forward to edit equivalency - Edit Local courses only
                $location.path("/equivalencyOverride/editEquivalencyLocalCourses" );
            }
        }).catch(function (errorData) {
            growl.addInfoMessage("The selection could not be saved.", {ttl: 10000});
        });





    }


}
EquivalencyOverrideController.$inject = ["$log", "$scope", "$location", "$routeParams", "$rootScope", "growl", "equivalencyOverrideService"];

