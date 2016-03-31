/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function EquivalencyOverrideService($routeParams, $rootScope, resourceFactoryService) {

    return {

        retrieveOrCreateEquivalency: function (overridePetition) {
            var requestResource = resourceFactoryService.retrieveOrCreateEquivalency();
            return requestResource.save({
                institutionId: $rootScope.institutionId,
                requestId: $rootScope.requestId,
                overridePetition: overridePetition
            }).$promise;
        },
        saveEquivalencyOverride: function (equivalencyOverride) {
            var requestResource = resourceFactoryService.saveEquivalencyOverride();
            return requestResource.save({
                institutionId: $rootScope.institutionId,
                requestId: $rootScope.requestId},
                {equivalencyOverride: equivalencyOverride
            }).$promise;
        },
       saveOverrideSelection: function (overridePetition) {
            var requestResource = resourceFactoryService.saveOverrideSelection();
            return requestResource.save({
                institutionId: $rootScope.institutionId,
                requestId: $rootScope.requestId,
                overridePetition: overridePetition
            }).$promise;
        },

        validateOverrideEquivalency: function (localCourse, localCourseList) {
            var message;

            // All local course fields should be empty or at list required values should be filled in

            var isLocalCourseEmpty = this.isLocalCourseEmpty(localCourse);

            if (!isLocalCourseEmpty) {
                if (localCourse.courseSubject == '' || localCourse.courseNumber == '') {
                    message = "Course Subject and Course Number are required ";
                    return message;
                }
                if (isNaN(localCourse.credits)) {
                    message = "Credits must be a valid number ";
                    return message;
                }
            }

            if (isLocalCourseEmpty & localCourseList.length == 0) {
                message = "To save a leftover Override you must provide at least one Local Course";
            }

            return message;
        },

        isLocalCourseEmpty: function (localCourse) {
            var isEmpty = true;
            var isCourseLevelEmpty = true;

            if (localCourse.courseLevel != null) {
                if ((localCourse.courseLevel.id != '') && (localCourse.courseLevel.id != -1)) {
                    isCourseLevelEmpty = false;
                }
            }

            if (localCourse.courseSubject != '' || localCourse.courseNumber != '' || !isCourseLevelEmpty ||
                localCourse.section != '' || localCourse.credits > 0) {
                // Object is empty
                isEmpty = false;
            }
            return isEmpty;
        }
    };
}
EquivalencyOverrideService.$inject = ["$routeParams", "$rootScope", "resourceFactoryService"];

