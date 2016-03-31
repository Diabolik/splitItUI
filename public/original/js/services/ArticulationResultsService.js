/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function ArticulationResultsService($rootScope,resourceFactoryService) {

    return {
        find: function(requestId) {
            var articulationResultsResource = resourceFactoryService.articulationResultsByRequestId();
            return articulationResultsResource.get({institutionId:$rootScope.institutionId},{requestId:requestId}).$promise;
        }
    };
}
ArticulationResultsService.$inject = ["$rootScope","resourceFactoryService"];


