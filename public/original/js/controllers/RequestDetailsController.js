/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function RequestDetailsController($log, $rootScope, $scope, $interval, $routeParams, growl, requestService, i18nService) {

    var requestUpdateCheck;
    var CHECK_AMMOUNT=5; //number of times we will check if the requets has been updated
    var requestId = $routeParams.requestId
    var transferCourse = $routeParams.transferCourse

    $rootScope.requestId = requestId;
    $rootScope.transferCourse = transferCourse;

    $scope.onLoad = function(response)
    {
        $scope.result = response;
        $scope.transferCoursesURL = response.transcriptURL;
        $scope.transcriptEnvelope = response.transcript;
    }

    $rootScope.$on('requestArticulation', function(event, args) {$scope.articulate()});

    $scope.retrieve = function(promiseResponse) {

        var requestPromise = requestService.find(requestId);

        requestPromise.then(promiseResponse);
        requestPromise['catch'](function (errorData) {
            growl.addInfoMessage("The request  could not be retrieved.", {ttl: 10000});
        });
    }

    $scope.publish = function(promiseResponse) {

        var requestPromise = requestService.publish(requestId);

        requestPromise.then(promiseResponse);
        requestPromise['catch'](function (errorData) {
            growl.addInfoMessage("The request  could not be published.", {ttl: 10000});
        });
    }

    $scope.articulate = function () {

        $scope.result.transcript['sessions'] = $rootScope.sessionDetails
        var requestPromise =requestService.articulate($scope.result)

        requestPromise.then(function (response) {
            growl.addInfoMessage("Articulation process started.");

            //after articualtion is started, check every 2 seconds if the request has been updated, for a total of CHECK_AMMOUNT times
            requestUpdateCheck= $interval(function() {
                growl.addInfoMessage("Updating request.", {ttl: 2000});

                $scope.retrieve( function(response)
                {
                    //if the request has been updated, reload the data
                    if(response.articulationResultURL != $scope.result.articulationResultURL)
                    {
                        $scope.stopCheck();
                        $scope.result = response;
                        $scope.transferCoursesURL = response.transcriptURL;

                        $scope.$broadcast('reloadArticulation');
                        $scope.$broadcast('reloadTranslationMessages');

                        growl.addInfoMessage("Articulation has been updated!.", {ttl: 10000});
                    }
                })}, 2000, CHECK_AMMOUNT);
        });
        requestPromise['catch'](function (errorData) {
            growl.addInfoMessage("Articulation process could not be started.", {ttl: 10000});
        });
    };

    /**
     * Stop interval
     */
    $scope.stopCheck = function() {
        if (angular.isDefined(requestUpdateCheck)) {
            $interval.cancel(requestUpdateCheck);
            requestUpdateCheck = undefined;
        }
    };

    //stops the interval when navigating off screen
    $scope.$on('$destroy', function() {
        // Make sure that the interval is destroyed too
        $scope.stopCheck();
    });

    //retrieve request the first time
    $scope.retrieve($scope.onLoad);

    //this is a temp throwaway code, till we decide how we are going to do i18n and localization
    $scope.getStatusDescription = function(statusCode){
        return i18nService.getStatusDescription(statusCode);
    }
}
RequestDetailsController.$inject = ["$log", "$rootScope","$scope", "$interval" , "$routeParams", "growl", "requestService", "i18nService"];
