/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */

(function () {
    'use strict';
    console.log("AppData.Provider");

    angular
        .module("AppDataProviderModule",[])
        .factory('AppDataProvider', ["$cookies", AppDataProvider]);

    function AppDataProvider($cookies) {

        return {
            name: "", //Name and lastname will be filled from security. Hard coded for the moment.
            lastName: "",
            destinationInstitutionId: "", //filled from security.
            storeData: function () {
                $cookies.putObject('appData', this, {path: "/app"});
                console.log("Storing the following data in cookie:[" + this.name + "] [" + this.lastName + "] [" + this.destinationInstitutionId + "]");
            },
            retrieveData: function () {
                var storedData = $cookies.getObject('appData')
                if (storedData) {
                    this.name = storedData.name;
                    this.lastName = storedData.lastName;
                    this.destinationInstitutionId = storedData.destinationInstitutionId
                    console.log("Retrieved the following data from Cookie:[" + this.name + "] [" + this.lastName + "] [" + this.destinationInstitutionId + "]");
                }
                else {
                    this.name = "Katniss";
                    this.lastName = "Everdeen";
                    this.destinationInstitutionId = "NOT_SET";
                    console.log("No cookie data found! Using defaults:[" + this.name + "] [" + this.lastName + "] [" + this.destinationInstitutionId + "]");

                }
            }
        };
    }
})();

