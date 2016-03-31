/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */

(function () {
    'use strict';

    console.log("Configuration.Controller");
    angular
        .module(global.moduleName)
        .controller('ConfigurationController', ['$window' , ConfigurationController]);

    function ConfigurationController($window) {
        var ct = this;

        //Anonymous  functions exposed
        ct.goToCourseLevelMap = function(){
            $window.location.href ="/app/configuration/#/courseLevelMap"
        }

        ct.goToAgreements= function(){
            $window.location.href ="/app/agreementListing/#"
        }
    }
})();