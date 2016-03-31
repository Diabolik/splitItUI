/*
 *
 *  * *******************************************************************************
 *  *   Copyright  2015 Ellucian Company L.P. and its affiliates.
 *  * *******************************************************************************
 *
 */

function CourseService($rootScope, resourceFactoryService) {

    return {
        save: function(transcriptId, sessionId, course) {
            var courseSaveResource = resourceFactoryService.courseSave();
            return courseSaveResource.save({institutionId:$rootScope.institutionId, transcriptId:transcriptId, sessionId:sessionId}, {course:course}).$promise;
        }
    };
}
CourseService.$inject = ["$rootScope","resourceFactoryService"];