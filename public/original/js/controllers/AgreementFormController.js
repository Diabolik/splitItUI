/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function AgreementFormController($log, $scope, $location, $routeParams,$rootScope, growl, institutionService)
{
    var institutionsPromise = institutionService.listAll();
    institutionsPromise.then(function(response) {
        $scope.institutions = response;
    });
    institutionsPromise['catch']( function(errorData)
    {
        growl.addInfoMessage("The agreement could not be saved.", {ttl: 10000});
    });

}
AgreementFormController.$inject=["$log","$scope", "$location", "$routeParams","$rootScope", "growl","institutionService"];

