/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */

(function () {
    'use strict';

    console.log("AppDataController");
    angular
        .module(global.moduleName)
        .controller('AppDataController', ["$location", "$window", "$scope", "$rootScope", "AppDataProvider", "InstitutionService", AppDataController]);

    function AppDataController($location, $window, $scope, $rootScope, AppDataProvider, InstitutionService) {


        //TODO: this info alert should probably go away later.
        if ($rootScope.infoMessage) {
            growl.info($rootScope.infoMessage, {ttl: 10000, disableCountDown: true});
            $rootScope.infoMessage = "";
        }

        var viewModel = this;
        viewModel.institutionList = [{id:"", name:""}]

        viewModel.selectedInstitutionId = AppDataProvider.destinationInstitutionId;


        /**
         * Load institutions into ctrlr scope
         */
        this.loadInstitutions = function () {
            InstitutionService.listAll().then(function (response) {
                viewModel.institutionList = response;
            });

        }
        this.loadInstitutions();

        /**
         * updates institution id
         * @param newInstitutionId
         */
        this.setInstitution = function (newInstitutionId) {
            AppDataProvider.destinationInstitutionId = newInstitutionId;
            AppDataProvider.storeData();
            $location.path("/" + newInstitutionId);
        }

        this.configurationModule = function () {
            $window.location.href = "/app/configuration/index.html"
        }


    }
})();