/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function TranscriptMessageService($rootScope,resourceFactoryService) {

    return {
        find: function(requestId) {
            var transcriptMessageResource = resourceFactoryService.getTranscriptMessages();
            return transcriptMessageResource.query({institutionId:$rootScope.institutionId},{requestId:requestId}).$promise;
        }
    };
}
TranscriptMessageService.$inject = ["$rootScope","resourceFactoryService"];


