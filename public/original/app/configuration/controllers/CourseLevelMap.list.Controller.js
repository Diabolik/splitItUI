/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */

(function () {
    'use strict';

    console.log("CourseLevelMapList.Controller");
    angular
        .module(global.moduleName)
        .controller('CourseLevelMapController', ["CourseLevelMapService", CourseLevelMapListController]);

    function CourseLevelMapListController(CourseLevelMapService) {
        var cl = this;

        //Anonymous  functions exposed
        cl.initData = function(){
            CourseLevelMapService.listAll().then(function (response) {
                cl.courseLevelMaps = response;
            });
        }

        //Retrieving the data from the server.
        cl.initData();
    }
})();