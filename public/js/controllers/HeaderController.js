/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function HeaderController($log, $scope, $rootScope, $route, $location, $window)
{
    /*var institutionsPromise = institutionService.listAll();
    institutionsPromise.then(function(response) {
        $scope.institutions = response;
    });
    $scope.selectedInstitutionId= $rootScope.institutionId;
    $scope.setInstitution = function(newInstitutionId){
        $scope.selectedInstitutionId = newInstitutionId;
        $rootScope.institutionId=newInstitutionId;
        $location.path("/" + newInstitutionId);
    }

    $scope.goToNew= function()
    {
        $window.location.href ="/app/home/index.html"
    }*/

}
HeaderController.$inject=["$log","$scope","$rootScope", "$route", "$location","$window"];
