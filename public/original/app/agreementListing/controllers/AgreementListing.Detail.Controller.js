 //AgreementListingDetailController
 /*
  * *******************************************************************************
  *   Copyright 2015 Ellucian Company L.P. and its affiliates.
  * *******************************************************************************
  */

 (function () {
     'use strict';

     console.log("AgreementListing.Detail.Controller");
     angular
         .module(global.moduleName)
         .controller('AgreementListingDetailController', ['$rootScope', '$location', 'AgreementService', 'InstitutionService', 'localeService', AgreementListingDetailController]);

     function AgreementListingDetailController($rootScope,$location, AgreementService, InstitutionService, LocaleService) {
         /* jshint validthis: true */
         var vm = this;

         vm.submitted = false;


         // gets institution data
         vm.initData = function () {
             InstitutionService.listAll().then(function (response) {
                 vm.institutionList = response;
             });
         };

         vm.save = function (form) {

             if(form.$valid){
                 AgreementService.save(vm.agreement)
                     .then(function (response) {
                         $rootScope.infoMessage = LocaleService.getValue("agreementListing.agreements.saveSuccessful.message");

                     }, function (errorData) {
                         log.error(LocaleService.getValue("agreementListing.agreements.saveFail.message"));
                     })
                 $location.path('/');
             }

             angular.element("[name='" + form.$name + "']").find('.ng-invalid:visible:first').focus();

             vm.submitted = true;
             return false;
         }

         vm.agreement = {};
         vm.initData();

     }
 })();
