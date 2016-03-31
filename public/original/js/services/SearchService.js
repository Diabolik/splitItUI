/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function SearchService($rootScope,resourceFactoryService) {

    return {
        searchByCriteria: function(queryString) {
            var requestResource = resourceFactoryService.searchByCriteria();
            return requestResource.query({queryString:queryString}).$promise;
        }    };
}
SearchService.$inject = ["$rootScope","resourceFactoryService"];

