/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function AgreementListController($log, $scope, $routeParams,$rootScope,growl,agreementService)
{
    var agreementsPromise = agreementService.findAgreementsByInstitution();

    agreementsPromise.then(function(response) {
        if ($rootScope.infoMessage) {
            growl.addInfoMessage($rootScope.infoMessage, {ttl: 10000});
            $rootScope.infoMessage = "";
        }
        $scope.results = response;
    });
    agreementsPromise['catch']( function(errorData) {
        growl.addInfoMessage("The agreements could not be retrieved.", {ttl: 10000});
    });



}
AgreementListController.$inject=["$log","$scope", "$routeParams","$rootScope", "growl","agreementService"];

