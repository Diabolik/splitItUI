/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function HomeController($log, $scope, $routeParams, $rootScope, growl, requestService, i18nService)
{
    var institutionId = $routeParams.institutionId;
    $rootScope.institutionId = $routeParams.institutionId;
    $scope.institutionId= $routeParams.institutionId;

    loadActivityStream();
    loadRequestSummary();

    function loadActivityStream(){
        var activityStreamPromise = requestService.getActivityStream();

        activityStreamPromise.then(function(response) {
            $scope.activityStreamList = response;
        });
        activityStreamPromise['catch']( function(errorData)
        {
            growl.addInfoMessage("The activity stream could not be retrieved.", {ttl: 10000});
        });
    }

    function loadRequestSummary(){
        var requestSummaryPromise = requestService.getRequestSummary();

        requestSummaryPromise.then(function(response) {
            $scope.requestSummary = response;
        });
        requestSummaryPromise['catch']( function(errorData)
        {
            growl.addInfoMessage("The request summary could not be retrieved.", {ttl: 10000});
        });
    }

    function makeSearchRequest(searchQuery, sortColumn, order){
        var searchPromise = requestService.searchRequests(searchQuery, sortColumn, order);

        searchPromise.then(function(response) {
            $scope.requestSearchList = response;
        });
        searchPromise['catch']( function(errorData)
        {
            growl.addInfoMessage("No data returned for given search criteria.", {ttl: 10000});
        });
    }

    //this is a temp throwaway code, till we decide how we are going to do i18n and localization
    $scope.getStatusDescription = function(statusCode){
        return i18nService.getStatusDescription(statusCode);
    };

    $scope.searchRequests = function(searchQuery, sortColumn, order){
        makeSearchRequest(searchQuery, sortColumn, order);
    }

}
HomeController.$inject=["$log","$scope", "$routeParams","$rootScope", "growl", "requestService", "i18nService"];
