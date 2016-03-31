/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function SearchController($log, $scope, $rootScope, growl, searchService){

    $scope.search= function() {
        var promise = searchService.searchByCriteria($scope.searchQuery);

        promise.then(function(response) {
            console.log(response);
            $scope.results= response.hits.hits
        });
        promise['catch']( function(errorData)
        {
            growl.addInfoMessage("An error was produced while processing your request.", {ttl: 10000});
        });
    };



}
SearchController.$inject=["$log","$scope","$rootScope", "growl", "searchService"];
