/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */

(function () {
    'use strict';
    console.log("Request.Service");

    angular
        .module(global.moduleName)
        .factory('RequestService', ["RemoteResource", "AppDataProvider", RequestService]);

    function RequestService(RemoteResource, AppDataProvider) {

        return {
            listAll: function () {
                var instId = AppDataProvider.destinationInstitutionId;
                console.log("Using institution id:" + instId);
                return RemoteResource.requests().listAll({institutionId: instId}).$promise;
            }
        };
    }
})();