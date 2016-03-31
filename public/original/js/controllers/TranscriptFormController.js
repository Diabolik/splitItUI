/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function TranscriptFormController($location,$rootScope,$log, $rootScope, $scope, $routeParams,$rootScope,growl,transcriptService, institutionService)
{
    var institutionsPromise = institutionService.listAll();
    institutionsPromise.then(function(response) {
        $scope.institutions = response;
    });
    institutionsPromise['catch']( function(errorData)
    {
        growl.addInfoMessage("The transcript could not be saved.", {ttl: 10000});
    });


    $scope.save = function(transcript) {
        var requestId =  $rootScope.requestId;
        transcript.destinationInstitutionId = $rootScope.institutionId;
        transcript.requestId=requestId;
        var transcriptPromise = transcriptService.save(transcript, requestId);

        transcriptPromise.then(function(response) {
            $rootScope.infoMessage = "The transcript was saved successfully.";

            $location.path("/requests/" + requestId);

        });
        transcriptPromise['catch']( function(errorData)
        {
            growl.addInfoMessage("The transcript could not be saved.", {ttl: 10000});
        });
    };
}
TranscriptFormController.$inject=["$location","$rootScope","$log","$rootScope","$scope", "$routeParams","$rootScope", "growl","transcriptService","institutionService"];

