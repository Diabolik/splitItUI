/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function AgreementDetailController($log, $scope, $routeParams,$rootScope, growl, agreementService, equivalencyService)
{
    var agreementId = $routeParams.agreementId;
    var agreementsPromise = agreementService.findAgreement(agreementId)
    var equivalenciesPromise = equivalencyService.findEquivalenciesByAgreement(agreementId)

    $scope.initGetAgreement = function () {
        agreementsPromise.then(function(response) {
            console.log(response);
            $scope.agreement = response;
            $rootScope.agreementId = agreementId;
        });
        agreementsPromise['catch']( function(errorData)
        {
            growl.addInfoMessage("The agreement: " + agreementId + " could not be retrieved.", {ttl: 10000});
        });
    }

    $scope.initGetEquivalencies = function () {
        equivalenciesPromise.then(function(response) {
            console.log(response);
            $scope.foundEquivalencies = response;
            $rootScope.agreementId = agreementId;
        });
        equivalenciesPromise['catch']( function(errorData)
        {
            growl.addInfoMessage("The equivalencies for agreement: " + agreementId + " could not be retrieved.", {ttl: 10000});
        });
    }
}
AgreementDetailController.$inject=["$log","$scope", "$routeParams","$rootScope", "growl", "agreementService", "equivalencyService"];

