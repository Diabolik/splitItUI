/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function SuggestMatchController($log, $scope, $rootScope, growl, equivalencyService) {

    if ($scope.leftOver.suggestionList.length == 0) {
        $scope.suggestion = [];
        $scope.percentage = "";
    }
    else {

        $scope.sugEquivalency = $scope.suggestion.equivalency
        $scope.percentage = $scope.suggestion.percentage + "%";


    }





}
SuggestMatchController.$inject = ["$log", "$scope", "$rootScope", "growl", "equivalencyService"];
