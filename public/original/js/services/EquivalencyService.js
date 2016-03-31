/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function EquivalencyService($routeParams, $rootScope, resourceFactoryService) {

    return {

        findEquivalency: function (equivalencyId) {
            var requestResource = resourceFactoryService.findEquivalency();
            return requestResource.get({
                institutionId: $rootScope.institutionId,
                agreementId: $rootScope.agreementId
            }, {equivalencyId: equivalencyId}).$promise;
        },

        findEquivalenciesByRequest: function (requestId) {
            var equivalencyResultsResource = resourceFactoryService.findEquivalenciesByRequest();
            return equivalencyResultsResource.query({institutionId: $rootScope.institutionId}, {requestId: requestId}).$promise;
        },


        findEquivalenciesByAgreement: function (agreementId) {
            var requestResource = resourceFactoryService.findEquivalenciesByAgreement();
            return requestResource.query({institutionId: $rootScope.institutionId, agreementId: agreementId}).$promise;
        },

        saveEquivalency: function (equivalency) {
            var requestResource = resourceFactoryService.saveEquivalency();
            return requestResource.save({
                institutionId: $rootScope.institutionId,
                agreementId: $rootScope.agreementId
            }, {equivalency: equivalency}).$promise;
        },

        deleteEquivalency: function (equivalencyId) {
            var requestResource = resourceFactoryService.deleteEquivalency();
            return requestResource.delete({
                institutionId: $rootScope.institutionId,
                agreementId: $rootScope.agreementId
            }, {equivalencyId: equivalencyId}).$promise;
        },

        validateEquivalency: function (equivalency) {
            //This method could be used to validate other data from the equivalency, so if the message is undefined at the end of the method,
            //it will mean that all the data is in a valid format.
            var message;
            var startDate = equivalency.attendancePeriodStartDate;
            var endDate = equivalency.attendancePeriodEndDate;

            if (startDate && endDate && startDate >= endDate) {
                message = "The attendance end date should be greater than the start date.";
            }
            return message;
        }
    };
}
EquivalencyService.$inject = ["$routeParams", "$rootScope", "resourceFactoryService"];

