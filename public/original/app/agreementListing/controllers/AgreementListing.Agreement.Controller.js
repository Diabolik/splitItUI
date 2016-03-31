 //AgreementListingDetailController
 /*
  * *******************************************************************************
  *   Copyright 2015 Ellucian Company L.P. and its affiliates.
  * *******************************************************************************
  */

 (function () {
     'use strict';

     console.log("AgreementListing.Agreement.Controller");
     angular
         .module(global.moduleName)
         .controller('AgreementListingAgreementController', ['AgreementService', 'InstitutionService', 'EquivalencyService', 'localeService', '$routeParams', AgreementListingAgreementController]);

     function AgreementListingAgreementController(AgreementService, InstitutionService, EquivalencyService, LocaleService, $routeParams) {
         /* jshint validthis: true */
         var vm = this;

         // gets agreement data
         vm.initData = function () {
             var agreementId = $routeParams.agreementId;
             AgreementService.get(agreementId)
                 .then(function (response) {
                     vm.agreement = response;

                     EquivalencyService.getAllByAgreement(agreementId).then(function (response) {
                         vm.agreement.equivalencies = response;
                     }, function errorHandler(error){
                         var errorMessage = LocaleService.getValue("agreementListing.equivalencies.errorMessage");
                         growl.info(errorMessage, {ttl: 10000, disableCountDown:true});
                     });

                     InstitutionService.listAll().then(function (response) {
                         vm.institutionList = response;
                     });

                 }, function errorHandler(error) {
                     var errorMessage = LocaleService.getValue("agreementListing.agreement.errorMessage");
                     growl.info(errorMessage, {ttl: 10000, disableCountDown:true});
                 });

         };

         vm.save = function () {
             AgreementService.save(vm.agreement)
                 .then(function (response) {
                     $rootScope.infoMessage = LocaleService.getValue("agreementListing.agreements.saveSuccessful.message");
                     $location.path("/");
                 }, function (errorData) {
                     log.error(LocaleService.getValue("agreementListing.agreements.saveFail.message"));
                 })

         }

         vm.agreement = {};
         vm.initData();




     }
 })();
