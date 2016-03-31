/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function TranscriptEvaluationController($rootScope,$log, $scope, $routeParams,$rootScope,growl,transcriptEvaluationService)
{
    $scope.showMessages = false;
    var requestId = $routeParams.requestId;
    $scope.evaluate = function($event){
         var transcriptEvaluatePromise = transcriptEvaluationService.evaluate($rootScope.transcriptId);
        transcriptEvaluatePromise.then(function(response) {$scope.showMessages = true;
            $scope.result = response;
         });
        transcriptEvaluatePromise['catch']( function(errorData)
         {
             alert(errorData);

             growl.addInfoMessage("The transfer course evaluation could not be retrieved.", {ttl: 10000});
         });


    };
}
TranscriptEvaluationController.$inject=["$rootScope","$log","$scope", "$routeParams","$rootScope", "growl","transcriptEvaluationService"];

