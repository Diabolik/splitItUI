/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function UndecidedArticulationDetailController($log, $scope, $routeParams, $rootScope, growl, equivalencyService) {

    $scope.onLoad = function (response) {

        $rootScope.requestId = $routeParams.requestId;
        $scope.equivalenyList = $rootScope.equivalencyList;
        //TODO: If we ever need M-N in undecided articulaiton, this needs to be improved.
        //so currently this only supports 1-N
        $scope.studentCourse = $rootScope.studentCourseList[0];
        $scope.selection = {selectedEquivalency: null};
    }

    $scope.onLoad();

}

UndecidedArticulationDetailController.$inject = ["$log", "$scope", "$routeParams", "$rootScope", "growl", "equivalencyService"];



