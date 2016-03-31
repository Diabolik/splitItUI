/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */

(function () {
    'use strict';

    console.log("AgreementListing.Controller");
    angular
        .module(global.moduleName)
        .controller('AgreementListingController', ['AgreementService', 'localeService', AgreementListingController]);

    function AgreementListingController(AgreementService, LocaleService) {
        /* jshint validthis: true */
        var vm = this;

        // gets agreement data
        vm.initData = function () {
            AgreementService.listAll()
                .then(function (response) {
                    vm.agreements = response;
                }, function errorHandler(error) {
                    console.log(error);
                })
        };

        vm.initData();
    }
})();
