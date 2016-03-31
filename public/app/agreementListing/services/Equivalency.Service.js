/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */

(function () {
    'use strict';
    console.log("Equivalency.Service");

    angular
        .module(global.moduleName)
        .factory('EquivalencyService', ["RemoteResource", "AppDataProvider", EquivalencyService]);

    function EquivalencyService(RemoteResource, AppDataProvider) {

        return {

            getAllByAgreement: function(agreementId) {
                var instId = AppDataProvider.destinationInstitutionId;
                console.log("EquivalencyService retrieving the list of equivalencies by agreement id:" + agreementId );
                return RemoteResource.equivalencies().query({institutionId:instId}, {agreementId: agreementId}).$promise;
            }
        };
    }
})();