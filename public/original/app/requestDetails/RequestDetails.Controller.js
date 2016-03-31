/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */

(function () {
    'use strict';

    console.log("RequestDetails.Controller");
    angular
        .module(global.moduleName)
        .controller('RequestDetailsController', ['TranscriptDetailsService', 'RequestDetailsService','localeService', '$scope','$routeParams', 'growl', RequestDetailsController]);

    function RequestDetailsController(TranscriptDetailsService, RequestDetailsService, LocaleService, $scope, $routeParams, growl) {
        var vm = this;

        //Anonymous  functions exposed
        vm.initData = function () {
            var requestId = $routeParams.requestId;
            vm.showTable = true

            if(requestId){
                RequestDetailsService.getRequest(requestId)
                    .then(function (response) {

                        var request = response;
                        request.statusDescription = LocaleService.getValue("common.request.status."+ request.statusCode);

                        if((request.transcript!= null) && (request.transcript.student != null)) {
                            request.student = buildName(request.transcript);
                            request.studentId = request.transcript.student.id;
                        }
                        else {
                            request.student = LocaleService.getValue("common.request.notAvailableMessage");
                            request.studentId = LocaleService.getValue("common.request.notAvailableMessage");
                        }

                        if(request.sourceInstitution!= null){
                            request.institution = request.sourceInstitution.name;
                        } else {
                            request.institution = LocaleService.getValue("common.request.notAvailableMessage");
                        }
                        vm.request = request;

                        // If transcript detailed data available, get it from the transcript service.
                        if (request.transcript && request.transcript.id) {
                            TranscriptDetailsService.getTranscript(request.transcript.id)
                                .then(function (transcript) {
                                    vm.transcript = transcript;
                                    if(transcript.sessions.length <= 0) {
                                        vm.showTable = false
                                    }
                                }, function errorHandler (error){
                                    var errorMessage = LocaleService.getValue("requestDetails.requestId.errorMessage");
                                    vm.request = {student: errorMessage};
                                    growl.info(errorMessage, {ttl: 10000, disableCountDown:true});
                                }) ;
                        } else {
                            vm.showTable = false
                        }

                        $scope.$broadcast('requestStatusCode', request.statusCode);

                    }, function errorHandler(error) {
                        var errorMessage = LocaleService.getValue("requestDetails.requestId.errorMessage");
                        vm.request = {student: errorMessage};
                        growl.info(errorMessage, {ttl: 10000, disableCountDown:true});
                    })
            }else {
                var missingRequestIdError = LocaleService.getValue("requestDetails.missingRequestId.errorMessage");
                growl.info(missingRequestIdError, {ttl: 10000, disableCountDown:true});
            }
        };

        function buildName(transcript) {
            var fullName = "";

            if (transcript.student.lastName) {
                fullName = fullName + transcript.student.lastName;
                if (transcript.student.firstName) {
                    fullName = transcript.student.firstName + " " + fullName;
                }
            }

            if (fullName == "") {return LocaleService.getValue("common.request.notAvailableMessage")};
            return fullName;
        }

        //Retrieving the data from the server.
        vm.initData();
    }

})();
