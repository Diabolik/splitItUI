/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function AgreementSaveController($log, $scope, $location, $routeParams,$rootScope, growl, agreementService)
{

    $scope.save = function(agreement) {
        agreement.destinationInstitutionId = $rootScope.institutionId;
        var agreementsPromise = agreementService.saveAgreement(agreement);

        agreementsPromise.then(function(response) {
            $rootScope.infoMessage = "The agreement was saved successfully.";
            $location.path("/agreements/");
        });
        agreementsPromise['catch']( function(errorData)
        {
            growl.addInfoMessage("The agreement could not be saved.", {ttl: 10000});
        });

    };
}
AgreementSaveController.$inject=["$log","$scope", "$location", "$routeParams","$rootScope", "growl", "agreementService"];

