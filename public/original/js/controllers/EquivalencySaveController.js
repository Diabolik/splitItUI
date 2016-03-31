/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function EquivalencySaveController($log, $scope, $location, $routeParams,$rootScope, growl, equivalencyService)
{
    $rootScope.equivalency = null;
    $scope.save = function(equivalency) {
        equivalency.agreementId = $rootScope.agreementId;
        var message = equivalencyService.validateEquivalency(equivalency);
        if(message) {
            growl.addInfoMessage(message, {ttl: 20000});
        }
        else {
            var equivalenciesPromise = equivalencyService.saveEquivalency(equivalency);

            equivalenciesPromise.then(function (response) {
                $rootScope.infoMessage = "The equivalency was saved successfully.";
                $location.path("/agreements/" + $rootScope.agreementId);
            });
            equivalenciesPromise['catch'](function (errorData) {
                growl.addInfoMessage("The equivalency could not be saved.", {ttl: 10000});
            });
        }

    };
}
EquivalencySaveController.$inject=["$log","$scope", "$location", "$routeParams","$rootScope", "growl", "equivalencyService"];

