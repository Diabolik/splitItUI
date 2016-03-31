/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */

(function () {
    'use strict';

    console.log("CourseLevelMapDetailController");
    angular
        .module(global.moduleName)
        .controller('CourseLevelMapDetailController', ["CourseLevelMapService", "CourseLevelService", "InstitutionService",
            "AppDataProvider", "localeService", "growl", "$rootScope", "$location", CourseLevelMapDetailController]);

    function CourseLevelMapDetailController(CourseLevelMapService, CourseLevelService, InstitutionService, AppDataProvider, localeService, growl,$rootScope,$location) {
        var cl = this;

        /*
         * expose Anonymous  functions here:
         */
        cl.initData = function () {
            CourseLevelService.listAll().then(function (response) {
                cl.courseLevelList = response;
            });

            InstitutionService.listAll().then(function (response) {
                cl.institutionList = response;
            });
        }

        cl.save = function () {
            CourseLevelMapService.save(cl.courseLevelMap)
                .then(function (response) {
                    $rootScope.infoMessage = localeService.getValue("configuration.courseLevelMap.saveSuccessful.message");
                    $location.path("/courseLevelMap");
                }, function (errorData) {
                    growl.info(localeService.getValue("configuration.courseLevelMap.saveFail.message"), {ttl: 10000, disableCountDown:true});
                })

        }

        //executed when ctrlr is instantiated
        cl.courseLevelMap = {}
        cl.courseLevelMap.destinationInstitutionId = AppDataProvider.destinationInstitutionId

        //Retrieving the data from the server.
        cl.initData();
    }
})();