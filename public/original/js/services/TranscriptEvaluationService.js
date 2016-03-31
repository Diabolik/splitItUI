/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function TranscriptEvaluationService($rootScope,resourceFactoryService) {

    return {
        evaluate: function(transcriptId) {
            var transcriptEvaluationResource = resourceFactoryService.transcriptEvaluate();
            return transcriptEvaluationResource.query({institutionId:$rootScope.institutionId},{transcriptId:transcriptId}).$promise;
        }
    };
}
TranscriptEvaluationService.$inject = ["$rootScope","resourceFactoryService"];

