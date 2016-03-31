/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */

(function () {
    'use strict';

    console.log("MatchesDetails.Controller");
    angular
        .module(global.moduleName)
        .controller('MatchesDetailsController', ['ArticulationDetailsService','localeService', '$routeParams', 'growl', MatchesDetailsController]);

    function MatchesDetailsController(ArticulationDetailsService, LocaleService, $routeParams, growl) {
        var vm = this;

        //Anonymous  functions exposed
        vm.initData = function (requestId) {
            var requestId = $routeParams.requestId;
            vm.showTable = false;

            if(requestId){
                ArticulationDetailsService.getArticulationResults(requestId)
                    .then(function (response) {
                        vm.matches = response.matched;
                        if(vm.matches.length > 0) {
                            vm.showTable = true;
                        }

                    }, function errorHandler(error) {
                        var errorMessage = LocaleService.getValue("requestDetails.requestId.errorMessage");
                        growl.info(errorMessage, {ttl: 10000, disableCountDown:true});
                    })
            }else {
                var missingRequestIdError = LocaleService.getValue("requestDetails.missingRequestId.errorMessage");
                growl.info(missingRequestIdError, {ttl: 10000, disableCountDown:true});
            }
        };

        //Retrieving the data from the server.
        vm.initData();
    }
})();