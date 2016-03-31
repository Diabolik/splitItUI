/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */

(function () {
    'use strict';
    console.log("Transcript.Service");

    angular
        .module(global.moduleName)
        .factory('TranscriptService', ["RemoteResource", "AppDataProvider", TranscriptService]);

    function TranscriptService(RemoteResource, AppDataProvider) {

        return {
            query: function (transcriptId) {

                var instId = AppDataProvider.destinationInstitutionId;

                console.log("TranscriptService querying using institution id:" + instId + "and transcript id: " + transcriptId);
                return RemoteResource.transcripts().query({institutionId:instId, transcriptId: transcriptId}).$promise;
            }
        };
    }
})();