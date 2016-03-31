/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function TranscriptController($rootScope,$log, $scope, $routeParams,$rootScope,growl,$location,transcriptService)
{
    var requestId = $routeParams.requestId;
    var transcriptPromise = transcriptService.find(requestId);

    transcriptPromise.then(function(response) {

        $rootScope.transcriptId = response.id;
        $scope.result = response;

        $scope.transcriptId=response.id;

        $rootScope.tr_destinationInstitutionId = response.destinationInstitutionId;
        $rootScope.tr_sourceInstitutionId = response.sourceInstitutionId;

        $rootScope.sessionDetails = response.sessions;
    });
    transcriptPromise['catch']( function(errorData)
    {
        growl.addInfoMessage("The transfer courses could not be retrieved.", {ttl: 10000});
    });

    $scope.createClick = function(requestId){
        $location.path("/transcript/form");
    };

    $scope.createSessionClick = function(){

        var redirectURL = "/requests/" + requestId + "/transcripts/" +  $scope.transcriptId + "/sessions";
        $location.path(redirectURL);
    };
}
TranscriptController.$inject=["$rootScope","$log","$scope", "$routeParams","$rootScope", "growl","$location","transcriptService"];

