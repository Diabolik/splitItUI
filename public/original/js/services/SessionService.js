/*
 *
 *  * *******************************************************************************
 *  *   Copyright  2015 Ellucian Company L.P. and its affiliates.
 *  * *******************************************************************************
 *
 */

function SessionService($rootScope,resourceFactoryService) {

    return {
        save: function(transcriptId, session) {
            var sessionSaveResource = resourceFactoryService.sessionSave();
            return sessionSaveResource.save({institutionId:$rootScope.institutionId, transcriptId:transcriptId}, {session:session}).$promise;
        }
    };
}
SessionService.$inject = ["$rootScope","resourceFactoryService"];