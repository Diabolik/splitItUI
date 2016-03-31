/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */

(function () {
    'use strict';
    console.log("RequestDetails.Service");

    angular
        .module(global.moduleName)
        .factory('RequestDetailsService', ["RemoteResource", "AppDataProvider", RequestDetailsService]);

    function RequestDetailsService(RemoteResource, AppDataProvider) {

        return {
            viewBag: {
                actionDetailsNeededItem: ""
            },
            getRequest: function (requestId) {
                var instId = AppDataProvider.destinationInstitutionId;
                console.log("Using institution id:" + instId);
                return RemoteResource.requests().query({institutionId: instId, requestId: requestId}).$promise;
            }
        };
    }
})();