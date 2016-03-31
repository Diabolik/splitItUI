/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
(function () {
    'use strict';
    angular.module('startup',["AppDataProviderModule"]).factory('ApplicationStartupService', ["AppDataProvider","$rootScope",ApplicationStartupService]);

    function ApplicationStartupService(AppDataProvider,$rootScope) {
        return {
            // Application specific stuff that needs to happen after Angular is loaded can go in this file.
            init: function () {
                console.log("ApplicationStartupService: Start");
                if (!isLocalStorageSupported) {
                    alert('your browser does not support HTML5 storage');
                }
                /**retrieves & set into AppData institutionId from cookie*/
                AppDataProvider.retrieveData();
                console.log("ApplicationStartupService: End");
            }
        };

        function isLocalStorageSupported() {
            try {
                return 'localStorage' in window && window['localStorage'] !== null;
            } catch (e) {
                return false;
            }
        }
    }
})();

