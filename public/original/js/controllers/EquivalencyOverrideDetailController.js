/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function EquivalencyOverrideDetailController($log, $scope, $location, $routeParams, $rootScope, growl, equivalencyOverrideService) {

    $scope.init = function () {
        $scope.showLocalCourseForm = false;
        $scope.equivalency = $rootScope.equivalency
    }



    $scope.save = function () {

        equivalencyOverrideService.saveEquivalencyOverride($scope.equivalency)
            .then(function (response) {
                $rootScope.infoMessage = "The Equivalency was saved successfully.";
                $location.path("/requests/" + $scope.equivalency.requestId);
            })
            .catch(function (errorData) {
                growl.addInfoMessage("The Equivalency could not be saved.", {ttl: 10000});
            });
    };


    $scope.removeTransferCourse = function (transferCourseId) {

        for (var i = 0; i < $scope.equivalency.transferCourseList.length; i++) {
            var transferCourse = $scope.equivalency.transferCourseList[i];
            if (transferCourse.id == transferCourseId) {
                $scope.equivalency.transferCourseList.splice(i, 1);
            }
        }
    }

    $scope.removeLocalCourse = function (localCourseId) {
        for (var localCourseIndex = 0; localCourseIndex < $scope.equivalency.localCourseList.length; localCourseIndex++) {
            var localCourse = $scope.equivalency.localCourseList[localCourseIndex];
            if (localCourse.id == localCourseId) {
                $scope.equivalency.localCourseList.splice(localCourseIndex, 1);
            }
        }
    }

    $scope.editLocalCourse = function (localCourse) {
        $scope.showLocalCourseForm = true;
        $scope.localCourse = localCourse;
        $scope.removeLocalCourse(localCourse.id);
        $scope.isANewLocalCourse = false;
        $scope.originalLocalCourse = cloneLocalCourse(localCourse);
    }


    $scope.cancelAddLocalCourse = function () {
        if (!$scope.isANewLocalCourse) {
            $scope.equivalency.localCourseList.push($scope.originalLocalCourse);
        }
        $scope.localCourse = newLocalCourse();
        $scope.showLocalCourseForm = !$scope.showLocalCourseForm;
    }


    $scope.addNewLocalCourse = function () {
        $scope.isANewLocalCourse = true;
        $scope.showLocalCourseForm = !$scope.showLocalCourseForm;
        $scope.localCourse = newLocalCourse();
    }

    $scope.addLocalCourse = function (localCourse) {
        var articulationCourseLevels = $rootScope.articulationCourseLevels;

        if (localCourse.courseLevel != null) {
            if (localCourse.courseLevel.id == -1) {
                localCourse.courseLevel = null;
            } else {
                for (var indexLevel = 0; indexLevel < articulationCourseLevels.length; indexLevel++) {
                    if (articulationCourseLevels[indexLevel].id == localCourse.courseLevel.id) {
                        localCourse.courseLevel = articulationCourseLevels[indexLevel];
                    }
                }
            }
        }

        $scope.equivalency.localCourseList.push(localCourse)
        $scope.showLocalCourseForm = false;
        $scope.localCourse = newLocalCourse();
    }


    $scope.cancelOverrideEquivalency = function () {
        $location.path("requests/" + $scope.equivalency.requestId);
    }

    function cloneLocalCourse(localCourse) {
        return (JSON.parse(JSON.stringify(localCourse)));
    }

    function newLocalCourse() {
        return {
            id: "",
            courseSubject: "",
            courseNumber: "",
            courseLevel: {id: "", code: "", description: ""},
            section: "",
            credits: 0
        };
    }

}
EquivalencyOverrideDetailController.$inject = ["$log", "$scope", "$location", "$routeParams", "$rootScope", "growl", "equivalencyOverrideService"];

