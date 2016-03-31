/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function LocalCourseService($rootScope,resourceFactoryService) {

    return {

        findLocalCourse: function(localCourseId) {
            var requestResource = resourceFactoryService.findLocalCourse();
            return requestResource.get({institutionId:$rootScope.institutionId,agreementId:$rootScope.agreementId,equivalencyId:$rootScope.equivalencyId},
                {localCourseId:localCourseId}).$promise;
        },

        deleteLocalCourse: function(localCourseId) {
            var requestResource = resourceFactoryService.deleteLocalCourse();
            return requestResource.delete({institutionId:$rootScope.institutionId, agreementId:$rootScope.agreementId,equivalencyId:$rootScope.equivalencyId},
                {localCourseId:localCourseId}).$promise;
        },

        saveLocalCourse: function(localCourse) {
            var requestResource = resourceFactoryService.saveLocalCourse();
            return requestResource.save({institutionId:$rootScope.institutionId,agreementId:$rootScope.agreementId,equivalencyId:$rootScope.equivalencyId},
                {localCourse:localCourse}).$promise;
        },

        validateLocalCourse: function(localCourse){
            var message;
            var startDate = localCourse.effectiveStartDate;
            var endDate = localCourse.effectiveEndDate;
            if(startDate && endDate && startDate >= endDate){
                message = "The course effective end date should be greater than the effective start date.";
            }
            return message;
        }
    };
}
LocalCourseService.$inject = ["$rootScope","resourceFactoryService"];

