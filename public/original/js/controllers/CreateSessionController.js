/*
 *
 *  * *******************************************************************************
 *  *   Copyright  2015 Ellucian Company L.P. and its affiliates.
 *  * *******************************************************************************
 *
 */

function CreateSessionController($log, $scope, $routeParams,$rootScope,growl, sessionService, $location)
{
    var requestId = $routeParams.requestId;
    $scope.session = {};
    $scope.requestId = $routeParams.requestId;
    $scope.institutionId = $routeParams.institutionId;
    $scope.transcriptId = $routeParams.transcriptId;

    $scope.createSession = function(sessionToBeCreated){
        var sessionPromise = sessionService.save($scope.transcriptId, sessionToBeCreated);

        sessionPromise.then(function(response) {
            $rootScope.infoMessage = "The session was saved successfully.";
            $location.path("/requests/" + $scope.requestId);

        });
        sessionPromise['catch']( function(errorData)
        {
            growl.addErrorMessage("The session could not be saved.", {ttl: 10000});
        });
    };

}
CreateSessionController.$inject=["$log","$scope", "$routeParams","$rootScope", "growl","sessionService", "$location"];