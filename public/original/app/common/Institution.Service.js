/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */

(function () {
    'use strict';
    console.log("Institution.Service");

    angular
        .module(global.moduleName)
        .factory('InstitutionService', ["RemoteResource", "AppDataProvider", InstitutionService]);

    function InstitutionService(RemoteResource, AppDataProvider) {

        return {
            listAll: function () {
                var instId = AppDataProvider.destinationInstitutionId
                console.log("Using institution id:" + instId);
                return RemoteResource.institutions().query({institutionId: instId}).$promise;
            }
        };
    }
})();

