/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */

(function () {
    'use strict';
    console.log("TranscriptDetails.Service");

    angular
        .module(global.moduleName)
        .factory('TranscriptDetailsService', ["RemoteResource", "AppDataProvider", TranscriptDetailsService]);

    function TranscriptDetailsService(RemoteResource, AppDataProvider) {

        return {
            getTranscript: function (transcriptId) {
                var instId = AppDataProvider.destinationInstitutionId;
                console.log("TranscriptDetails.Service queried; institution id:" + instId + " transcript id " + transcriptId );
                return RemoteResource.transcripts().query({institutionId: instId, transcriptId: transcriptId}).$promise;
            }
        };
    }
})();