/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */

/**
 * Angular Service to retrieve course level data.
 * @param $rootScope
 * @param resourceFactoryService
 * @returns {{listAll: Function}}
 * @constructor
 */
function CourseLevelMapService($rootScope,resourceFactoryService) {

    return {
        translateCourseLevelCode: function(destInstId, srcInstId, levelCode) {
            var translateCourseLevelCodeResource = resourceFactoryService.translateCourseLevelCode();
            return translateCourseLevelCodeResource.query({institutionId:destInstId, sourceInstitutionId: srcInstId, levelCode: levelCode}).$promise;
        },
        save : function (courseLevelMap) {
        var instId =$rootScope.tr_destinationInstitutionId
        console.log("Using institution id in CourseLevelMap Service:" + instId);
        console.log("saving:" + angular.toJson(courseLevelMap, true));
        return resourceFactoryService.courseLevelMap().save({institutionId: instId}, courseLevelMap).$promise;
    }
    };
}
CourseLevelMapService.$inject = ["$rootScope","resourceFactoryService"];

