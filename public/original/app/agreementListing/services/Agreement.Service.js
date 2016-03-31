/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */

(function () {
    'use strict';
    console.log("Agreement.Service");

    angular
        .module(global.moduleName)
        .factory('AgreementService', ["RemoteResource", "AppDataProvider", AgreementService]);

    function AgreementService(RemoteResource, AppDataProvider) {

        return {
            listAll: function () {

                var instId = AppDataProvider.destinationInstitutionId;

                console.log("AgreementService querying using institution id:" + instId );
                return RemoteResource.agreements().listAll({institutionId:instId}).$promise;
            },
            save: function (agreement) {
                var instId = AppDataProvider.destinationInstitutionId;
                console.log("Using institution id in Agreement Service:" + instId);
                console.log("saving:" + angular.toJson(agreement, true));
                agreement.destinationInstitutionId = instId;
                return RemoteResource.agreements().save({institutionId: instId},{agreement: agreement}).$promise;
            },
            get: function(agreementId) {
                var instId = AppDataProvider.destinationInstitutionId;
                console.log("AgreementService retrieving single agreement, id:" + agreementId );
                return RemoteResource.agreements().get({institutionId:instId}, {agreementId: agreementId}).$promise;
            }
        };
    }
})();