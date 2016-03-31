/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function AgreementService($rootScope,resourceFactoryService) {

    return {
        findAgreementsByInstitution: function() {
            var requestResource = resourceFactoryService.agreementsByInstitution();
            return requestResource.query({institutionId:$rootScope.institutionId}).$promise;
        },

        findAgreement: function(agreementId) {
            var requestResource = resourceFactoryService.findAgreement();
            return requestResource.get({institutionId:$rootScope.institutionId},{agreementId:agreementId}).$promise;
        },

        deleteAgreement: function(agreementId) {
            var requestResource = resourceFactoryService.deleteAgreement();
            return requestResource.delete({institutionId:$rootScope.institutionId},{agreementId:agreementId}).$promise;
        },

        saveAgreement: function(agreement) {
            var requestResource = resourceFactoryService.saveAgreement();
            return requestResource.save({institutionId:$rootScope.institutionId},{agreement:agreement}).$promise;
        }
    };
}
AgreementService.$inject = ["$rootScope","resourceFactoryService"];

