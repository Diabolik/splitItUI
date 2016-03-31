/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */

(function () {
    'use strict';

    console.log("RequestListing.Controller");
    angular
        .module(global.moduleName)
        .controller('RequestListingController', ['TranscriptService', 'RequestService', 'localeService', 'growl', RequestListingController]);

    function RequestListingController(TranscriptService, RequestService, LocaleService, growl) {
        /* jshint validthis: true */
        var vm = this;

        // gives difference between two dates in days
        vm.dateDiff = function (cycleTime) {
            var textDays = LocaleService.getValue("requestListing.requests.cycleTime.suffix.days");
            var textHours = LocaleService.getValue("requestListing.requests.cycleTime.suffix.hours");
            return cycleTime.days + textDays + " " + cycleTime.hours + textHours;
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

        // gets transcript data
        vm.loadTranscript = function (request) {
            TranscriptService.query(request.transcriptId)
                .then(function (transcript) {
                    //get transcript data for this request
                    if (transcript.student) {
                        if (!transcript.student.erpStudentId) {
                            request.studentId = LocaleService.getValue("common.request.notAvailableMessage");
                        } else {
                            request.studentId = transcript.student.erpStudentId;
                        }
                        request.student = buildName(transcript);

                    } else {
                        request.studentId = LocaleService.getValue("common.request.notAvailableMessage");
                        request.student = LocaleService.getValue("common.request.notAvailableMessage");
                    }
                    // TODO - figure out why the name moves around in the json coming from the request app - suspect
                    // TODO -  it is moved somehow when articulation completes.

                    if(request.sourceInstitution) {
                        request.institution = request.sourceInstitution.name;
                    } else {
                        request.institution = LocaleService.getValue("common.request.notAvailableMessage");
                    }

                }, function errorHandler(error) {
                    console.log(error);
                });
        };

        // gets request data
        vm.initData = function () {
            RequestService.listAll()
                .then(function (response) {
                    response.forEach(function (request) {
                        // get transcript
                        vm.loadTranscript(request);

                        // calculate cycle time
                        if (request && request.cycleTime && request.cycleTime.days) {
                            request.cycleTime = vm.dateDiff(request.cycleTime);
                        }
                        // Translate the status code
                        request.statusDescription = LocaleService.getValue("common.request.status." + request.statusCode);
                    });
                    vm.requests = response;
                }, function errorHandler(error) {
                    console.log(error);
                })
        };

        vm.initData();
    }
})();
