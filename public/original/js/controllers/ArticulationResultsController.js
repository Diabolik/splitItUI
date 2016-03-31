/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function ArticulationResultsController($log, $scope, $routeParams,$rootScope,growl,articulationResultsService)
{
    var requestId = $routeParams.requestId;

    $scope.retrieve = function() {

        var articulationResultsPromise = articulationResultsService.find(requestId);

        articulationResultsPromise.then(function (response) {
            $scope.result = response;
            $rootScope.articulationResult = response;
        });
        articulationResultsPromise['catch'](function (errorData) {
            growl.addInfoMessage("The articulation results could not be retrieved.", {ttl: 10000});
        });
    }


    $scope.$on('reloadArticulation',function() { $scope.retrieve();});

    $scope.retrieve();
}
ArticulationResultsController.$inject=["$log","$scope", "$routeParams","$rootScope", "growl","articulationResultsService"];

