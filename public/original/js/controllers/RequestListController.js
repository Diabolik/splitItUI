/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function RequestListController($location, $log, $scope, $rootScope, growl,requestService, i18nService)
{
    var requestPromise = requestService.listAll();

    requestPromise.then(function(response) {
        $scope.results = response;
    });
    requestPromise['catch']( function(errorData)
    {
        growl.addInfoMessage("The request list could not be retrieved.", {ttl: 10000});
    });

    $scope.create = function($event){
        var requestPromise = requestService.create();

        requestPromise.then(function(response) {
            var requestId = response.id;
            // Show the request details page.
            $location.path("/requests/" + requestId);
        });
        requestPromise['catch']( function(errorData)
        {
            growl.addInfoMessage("The request  could not be retrieved.", {ttl: 10000});
        });
    };

    //this is a temp throwaway code, till we decide how we are going to do i18n and localization
    $scope.getStatusDescription = function(statusCode){
        return i18nService.getStatusDescription(statusCode);
    };
}
RequestListController.$inject=["$location", "$log","$scope", "$rootScope", "growl","requestService", "i18nService"];
