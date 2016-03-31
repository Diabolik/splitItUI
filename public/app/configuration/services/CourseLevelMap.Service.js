/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */

(function () {
    'use strict';
    console.log("CourseLevelMap.Service");

    angular
        .module(global.moduleName)
        .factory('CourseLevelMapService', ["RemoteResource", "AppDataProvider", CourseLevelMapService]);

    function CourseLevelMapService(RemoteResource, AppDataProvider) {

        return {
            listAll: function () {
                var instId = AppDataProvider.destinationInstitutionId
                console.log("Using institution id in CourseLevelMap Service:" + instId);
                return RemoteResource.courseLevelMapsByInstitution().query({institutionId: instId}).$promise;
            },
            save: function (courseLevelMap) {
                var instId = AppDataProvider.destinationInstitutionId
                console.log("Using institution id in CourseLevelMap Service:" + instId);
                console.log("saving:" + angular.toJson(courseLevelMap, true));
                return RemoteResource.courseLevelMap().save({institutionId: instId}, courseLevelMap).$promise;
            }
        };
    }
})();

