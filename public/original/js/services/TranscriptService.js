/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function TranscriptService($rootScope,resourceFactoryService) {

    return {
        save: function(transcript,requestId) {
            var transcriptSaveResource = resourceFactoryService.transcriptSave();
            return transcriptSaveResource.save({institutionId:$rootScope.institutionId,requestId:requestId},{transcript:transcript}).$promise;
        },
        find: function(requestId) {
            var transcriptResource = resourceFactoryService.transcriptByRequestId();
            return transcriptResource.get({institutionId:$rootScope.institutionId},{requestId:requestId}).$promise;
        }
    };

}
TranscriptService.$inject = ["$rootScope","resourceFactoryService"];

