/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function RequestService($rootScope,resourceFactoryService) {

    /*return {
        listAll: function() {
            var requestResource = resourceFactoryService.requests();
            return requestResource.query({institutionId:$rootScope.institutionId}).$promise;
        },
        find: function(requestId) {
            var requestResource = resourceFactoryService.request();
            return requestResource.get({institutionId:$rootScope.institutionId},{requestId:requestId}).$promise;
        },
        publish: function(requestId) {
            var requestResource = resourceFactoryService.requestPublish();
            return requestResource.get({institutionId:$rootScope.institutionId},{requestId:requestId}).$promise;
        },
        create: function() {
            var requestCreateResource = resourceFactoryService.requestCreate();
            return requestCreateResource.save({institutionId:$rootScope.institutionId}).$promise;
        },
        articulate: function(request)
        {
            var requestResource = resourceFactoryService.requestArticulate();
            return requestResource.query({institutionId:$rootScope.institutionId},{requestId:request.id}).$promise;
        },
        getActivityStream: function() {
            var activityStreamResource = resourceFactoryService.activityStream();
            return activityStreamResource.query({institutionId:$rootScope.institutionId}).$promise;
        },
        getRequestSummary: function() {
            var requestSummaryResource = resourceFactoryService.requestSummary();
            return requestSummaryResource.get({institutionId:$rootScope.institutionId}).$promise;
        },
        searchRequests: function(searchQuery, sortColumn, order) {
            var requestSearchResource = resourceFactoryService.searchRequests();
            return requestSearchResource.get({institutionId:$rootScope.institutionId, q:searchQuery, sort:sortColumn, order:order}).$promise;
        }
    };*/
}
RequestService.$inject = ["$rootScope","resourceFactoryService"];

