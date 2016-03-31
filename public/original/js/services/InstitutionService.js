/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function InstitutionService($rootScope,resourceFactoryService) {

    return {
        listAll: function() {
            var institutionResource = resourceFactoryService.institutions();

            var instId = $rootScope.institutionId?$rootScope.institutionId:'FORCEDFIX'

            return institutionResource.query({institutionId:instId}).$promise;
        }
    };
}
InstitutionService.$inject = ["$rootScope","resourceFactoryService"];

