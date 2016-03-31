/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */

(function () {
    'use strict';

    console.log("ActionNeededDetails.Controller");
    angular
        .module(global.moduleName)
        .controller('ActionNeededDetailsController', ['ArticulationDetailsService', 'RequestDetailsService','$location', 'localeService', '$routeParams', 'growl', ActionNeededDetailsController]);

    function ActionNeededDetailsController(ArticulationDetailsService, RequestDetailsService, $location, localeService, $routeParams, growl) {
        var vm = this;
        vm.actionDetailsNeededItem = RequestDetailsService.viewBag.actionDetailsNeededItem

        //Anonymous  functions exposed
        vm.initData = function () {
            vm.requestId = $routeParams.requestId;

            if(!vm.actionDetailsNeededItem) {
                $location.path("/requests/" + vm.requestId);
            }

            if(vm.requestId){
                RequestDetailsService.getRequest(vm.requestId)
                    .then(function (response) {
                        var request = response;

                        if((request.transcript!= null) && (request.transcript.student != null)) {
                            vm.student = buildName(request.transcript);
                        }
                        else {
                            vm.student = LocaleService.getValue("common.request.notAvailableMessage");
                        }

                        if(request.sourceInstitution!= null){
                            vm.institution = request.sourceInstitution.name;
                        } else {
                            vm.institution = LocaleService.getValue("common.request.notAvailableMessage");
                        }

                    }, function errorHandler(error) {
                        var errorMessage = localeService.getValue("requestDetails.requestId.errorMessage");
                        growl.info(errorMessage, {ttl: 10000, disableCountDown:true});
                    })
            }else {
                var missingRequestIdError = localeService.getValue("requestDetails.missingRequestId.errorMessage");
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
