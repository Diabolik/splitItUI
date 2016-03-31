/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function EquivalencyOverrideListController($log, $scope, $routeParams,$rootScope,growl,equivalencyService)
{
    var requestId = $routeParams.requestId;

    var equivalencyResultsPromise = equivalencyService.findEquivalenciesByRequest(requestId);

    equivalencyResultsPromise.then(function (response) {
         $scope.equivalencyResult = response;
    });
    equivalencyResultsPromise['catch'](function (errorData) {
        growl.addInfoMessage("The equivalency results could not be retrieved.", {ttl: 10000});
    });

}
EquivalencyOverrideListController.$inject=["$log","$scope", "$routeParams","$rootScope", "growl","equivalencyService"];

