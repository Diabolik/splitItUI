/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function TransferCourseService($rootScope,resourceFactoryService) {

    return {

        createTransferCourse: function(studentCourseId) {
            var requestResource = resourceFactoryService.createTransferCourse();
            return requestResource.get({institutionId:$rootScope.institutionId,studentCourseId:studentCourseId}).$promise;
        },

        findTransferCourse: function(transferCourseId) {
            var requestResource = resourceFactoryService.findTransferCourse();
            return requestResource.get({institutionId:$rootScope.institutionId,agreementId:$rootScope.agreementId,equivalencyId:$rootScope.equivalencyId},
                {transferCourseId:transferCourseId}).$promise;
        },

        deleteTransferCourse: function(transferCourseId) {
            var requestResource = resourceFactoryService.deleteTransferCourse();
            return requestResource.delete({institutionId:$rootScope.institutionId, agreementId:$rootScope.agreementId,equivalencyId:$rootScope.equivalencyId},
                {transferCourseId:transferCourseId}).$promise;
        },

        saveTransferCourse: function(transferCourse) {
            var requestResource = resourceFactoryService.saveTransferCourse();
            return requestResource.save({institutionId:$rootScope.institutionId,agreementId:$rootScope.agreementId,equivalencyId:$rootScope.equivalencyId},
                {transferCourse:transferCourse}).$promise;
        }
    };
}
TransferCourseService.$inject = ["$rootScope","resourceFactoryService"];

