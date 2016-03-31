/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */

(function () {
    'use strict';
    console.log("CourseLevelService");

    angular
        .module(global.moduleName)
        .factory('CourseLevelService', ["RemoteResource", "AppDataProvider", CourseLevelService]);

    function CourseLevelService(RemoteResource, AppDataProvider) {

        return {
            listAll: function () {
                var instId = AppDataProvider.destinationInstitutionId
                console.log("Using institution id in CourseLevelMap Service:" + instId);
                return RemoteResource.courseLevels().query({institutionId: instId}).$promise;
            }
        };
    }
})();

