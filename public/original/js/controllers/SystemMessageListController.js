/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function SystemMessageListController($log, $scope, $rootScope, growl,systemMessageService)
{
    var listPromise = systemMessageService.listAll();

    listPromise.then(function(response) {
        $scope.results = response;
    });
    listPromise['catch']( function(errorData)
    {
        growl.addInfoMessage("The system message list could not be retrieved.", {ttl: 10000});
    });


}
SystemMessageListController.$inject=["$log","$scope", "$rootScope", "growl","systemMessageService"];
