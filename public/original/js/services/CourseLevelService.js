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
function CourseLevelService($rootScope,resourceFactoryService) {

    return {
        listAll: function() {
            var courseLevelResource = resourceFactoryService.courseLevels();
            return courseLevelResource.query({institutionId:$rootScope.institutionId}).$promise;
        }
    };
}
CourseLevelService.$inject = ["$rootScope","resourceFactoryService"];

