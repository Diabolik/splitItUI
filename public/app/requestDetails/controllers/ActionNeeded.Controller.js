/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */

(function () {
    'use strict';

    console.log("ActionNeeded.Controller");
    angular
        .module(global.moduleName)
        .controller('ActionNeededController', ['ArticulationDetailsService', 'RequestDetailsService', '$location', 'localeService', '$routeParams', 'growl', ActionNeededController]);

    function ActionNeededController(ArticulationDetailsService, RequestDetailsService, $location, localeService, $routeParams, growl) {
        var vm = this;

        //Anonymous  functions exposed
        vm.initData = function () {
            var requestId = vm.requestId = $routeParams.requestId;
            vm.showTable = false;

            if(requestId){
                ArticulationDetailsService.getArticulationResults(requestId)
                    .then(function (response) {
                        vm.leftOvers = response.leftOver;
                        vm.undecided = response.undecided;
                        vm.unmatchedNumber = vm.leftOvers.length + vm.undecided.length
                        if(vm.unmatchedNumber > 0) {
                            vm.showTable = true;
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

        vm.getTranslatedStatus = function(statusCodes, size) {
            if (statusCodes == undefined) {
                return localeService.getValue("articulationResults.actionNeeded.statusCode.undecided");
            }
            var statusCode = statusCodes.split(',');
            var text = "";
            statusCode.forEach(function (code) {
                text += localeService.getValue("articulationResults.actionNeeded.statusCode." + code) + "\r\n";
            });
            return text.trim();
        }

        vm.goToActionNeededDetails = function(actionItemId) {
            for(var item in vm.leftOvers) {
                if(vm.leftOvers[item].id == actionItemId) {
                    RequestDetailsService.viewBag.actionDetailsNeededItem = vm.leftOvers[item];
                }
            }

            for(var item in vm.undecided) {
                if(vm.undecided[item].id == actionItemId) {
                    RequestDetailsService.viewBag.actionDetailsNeededItem = vm.undecided[item];
                }
            }

            $location.path("/requestsAction/" + vm.requestId);
        }

        //Retrieving the data from the server.
        vm.initData();
    }
})();
