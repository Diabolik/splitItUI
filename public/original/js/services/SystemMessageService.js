/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function SystemMessageService($rootScope,resourceFactoryService) {

    return {
        listAll: function() {
            var systemMessagesResource = resourceFactoryService.systemMessages();
            return systemMessagesResource.query().$promise;
        }
    };
}
SystemMessageService.$inject = ["$rootScope","resourceFactoryService"];

