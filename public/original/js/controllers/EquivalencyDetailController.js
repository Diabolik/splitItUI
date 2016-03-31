/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function EquivalencyDetailController($log, $scope, $location, $routeParams, $rootScope, growl, equivalencyService) {
    var equivalencyId = $routeParams.equivalencyId;
    if (equivalencyId) {
        var equivalenciesPromise = equivalencyService.findEquivalency(equivalencyId)


        equivalenciesPromise.then(function (response) {
            console.log(response);
            $scope.equivalency = response;

            $rootScope.equivalencyId = equivalencyId;

        });
        equivalenciesPromise['catch'](function (errorData) {
            growl.addInfoMessage("The equivalencyXXX" + equivalencyId + " could not be retrieved.", {ttl: 10000});
        });
    }

    $scope.viewEquivalency = function (equivalency) {
        $location.path("/equivalencies/" + equivalency.id);
    }
}

EquivalencyDetailController.$inject = ["$log", "$scope", "$location", "$routeParams", "$rootScope", "growl", "equivalencyService"];


