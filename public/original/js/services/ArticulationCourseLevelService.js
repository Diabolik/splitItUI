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
function ArticulationCourseLevelService($rootScope,resourceFactoryService) {

    return {
        listAll: function() {
            var courseLevelResource = resourceFactoryService.articulationCourseLevels();
            return courseLevelResource.query({institutionId:$rootScope.institutionId}).$promise;
        }
    };
}
ArticulationCourseLevelService.$inject = ["$rootScope","resourceFactoryService"];

