/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function ModalsController($log, $scope, $location, $routeParams, $rootScope, $dialogs, growl, agreementService, equivalencyService, localCourseService, transferCourseService)
{
    $scope.launch = function(which){
        var dlg = null;
        switch(which){
            // Error Dialog
            case 'error':
                dlg = $dialogs.error('This is my error message');
                break;
            // Notify Dialog
            case 'notify':
                dlg = $dialogs.notify('Something Happened!','Something happened that I need to tell you.');
                break;
            // Confirm Dialog
            case 'confirmDeleteAgreement':
                dlg = $dialogs.confirm('Delete Agreement','Do you want to delete the Agreement?');
                dlg.result.then(function(btn){
                    var agreementId = $routeParams.agreementId;
                    var agreementsPromise = agreementService.deleteAgreement(agreementId)

                    agreementsPromise.then(function(response) {
                        $rootScope.infoMessage = "The agreement " + agreementId + " was deleted successfully.";
                        $location.path("/agreements/");
                    });
                    agreementsPromise['catch']( function(errorData) {
                        $rootScope.infoMessage = "The agreement " + agreementId + " could not be deleted.";
                        $location.path("/agreements/");
                    });
                },function(btn){});
                break;
            case 'confirmDeleteEquivalency':
                dlg = $dialogs.confirm('Delete Equivalency','Do you want to delete the Equivalency?');
                dlg.result.then(function(btn){
                    var equivalencyId = $routeParams.equivalencyId;
                    var equivalenciesPromise = equivalencyService.deleteEquivalency(equivalencyId)

                    equivalenciesPromise.then(function(response) {
                        $rootScope.infoMessage = "The equivalency " + equivalencyId + " was deleted successfully.";
                        $location.path("/agreements/" + $rootScope.agreementId);
                    });
                    equivalenciesPromise['catch']( function(errorData) {
                        $rootScope.infoMessage = "The equivalency " + equivalencyId + " could not be deleted.";
                        $location.path("/agreements/");
                    });
                },function(btn){});
                break;

            case 'confirmDeleteLocalCourse':
                dlg = $dialogs.confirm('Delete Local Course','Do you want to delete the Local Course?');
                dlg.result.then(function(btn){
                    var localCourseId = $routeParams.localCourseId;
                    var localCoursesPromise = localCourseService.deleteLocalCourse(localCourseId)

                    localCoursesPromise.then(function(response) {
                        $rootScope.infoMessage = "The Local Course " + localCourseId + " was deleted successfully.";
                        $location.path("/equivalencies/" + $rootScope.equivalencyId);
                    });
                    localCoursesPromise['catch']( function(errorData) {
                        $rootScope.infoMessage = "The  Local Course " + localCourseId + " could not be deleted.";
                        $location.path("/equivalencies/"+ $rootScope.equivalencyId);
                    });
                },function(btn){});
                break;
            case 'confirmDeleteTransferCourse':
                dlg = $dialogs.confirm('Delete Transfer Course','Do you want to delete the Transfer Course?');
                dlg.result.then(function(btn){
                    var transferCourseId = $routeParams.transferCourseId;
                    var transferCoursePromise = transferCourseService.deleteTransferCourse(transferCourseId)

                    transferCoursePromise.then(function(response) {
                        $rootScope.infoMessage = "The Transfer Course " + transferCourseId + " was deleted successfully.";
                        $location.path("/equivalencies/"+ $rootScope.equivalencyId);
                    });
                    transferCoursePromise['catch']( function(errorData) {
                        $rootScope.infoMessage = "The Transfer Course " + transferCourseId + " could not be deleted.";
                        $location.path("/equivalencies/"+ $rootScope.equivalencyId);
                    });
                },function(btn){});
                break;
        };
    };
}

ModalsController.$inject=["$log","$scope", "$location", "$routeParams", "$rootScope", "$dialogs", "growl", "agreementService", "equivalencyService", "localCourseService", "transferCourseService"];

