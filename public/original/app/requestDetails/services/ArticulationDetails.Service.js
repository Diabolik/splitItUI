/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */

(function () {
    'use strict';
    console.log("ArticulationDetails.Service");

    angular
        .module(global.moduleName)
        .factory('ArticulationDetailsService', ["RemoteResource", "AppDataProvider", ArticulationDetailsService]);

    function ArticulationDetailsService(RemoteResource, AppDataProvider) {

        return {
            getArticulationResults: function (requestId) {
                var instId = AppDataProvider.destinationInstitutionId;
                console.log("Using institution id:" + instId + " and request id: " + requestId);
                return RemoteResource.articulation().get({institutionId: instId, requestId: requestId}).$promise;
            }
        };
    }
})();