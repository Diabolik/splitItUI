/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function TranscriptMessageController($log, $scope, $routeParams,$rootScope,growl,transcriptMessageService)
{
    var requestId = $routeParams.requestId;

    $scope.retrieve = function() {

        var transcriptMessagePromise = transcriptMessageService.find(requestId);

        transcriptMessagePromise.then(function (response) {
            $scope.translationMessagesResult = response;
            $scope.showRequestMessageTab = true;
        });
        transcriptMessagePromise['catch'](function (errorData) {
            growl.addInfoMessage("The translation results could not be retrieved.", {ttl: 10000});
            $scope.showRequestMessageTab = false;
        });
    }

    $scope.$on('reloadTranslationMessages',function() { $scope.retrieve();});

    $scope.retrieve();
}
TranscriptMessageController.$inject=["$log","$scope", "$routeParams","$rootScope", "growl","transcriptMessageService"];

