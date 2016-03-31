/* Copyright 2008-2014 Ellucian Company L.P. and its affiliates. */
/* Wires up and engages Angular to the document that is loaded.  */
var init = (function() {

    // The assumption here is that the property files for the given module are under an 'i18n' folder.
    var moduleLocalePath = 'i18n';

    // From the current module, we should go up one directory and into the common/i18n directory.
    var commonLocalePath = '../common/i18n';

    var commonModuleName = 'common';


    function concatenateLocales(sourceLocales, targetLocales) {
        for(var item in sourceLocales) {
            // If the targetLocales object does not already have the property item, then add it.
            // This prevents item properties in the targetLocales from being overridden.

           if(targetLocales.hasOwnProperty(item) == false) {
               targetLocales[item] = sourceLocales[item];
           }

        }
        return targetLocales;
    }

    // Get the localeLoaderService from the Angular context and call the loadProperties() function to load the i18n file.
    var initInjector = angular.injector(['ng', global.moduleName]);
    var localeLoaderService = initInjector.get('localeLoaderService');

    var moduleLocaleURL = localeLoaderService.buildLocaleURL(moduleLocalePath, global.moduleName);
    var moduleDefaultLocaleURL = localeLoaderService.buildDefaultLocaleURL(moduleLocalePath, global.moduleName);

    // Call to load the module locale.  Also pass in the default locale in case the property file is not found for the given locale
    // specified in the browser.
    localeLoaderService.loadProperties(moduleLocaleURL, moduleDefaultLocaleURL)
        .then(function(localeArray) {
            var moduleLocaleArray = localeArray;
            var commonLocaleURL = localeLoaderService.buildLocaleURL(commonLocalePath, commonModuleName);
            var commonDefaultLocaleURL = localeLoaderService.buildDefaultLocaleURL(commonLocalePath, commonModuleName);
            // Now call to load the the common locale property file.  Load the default common file if one is not found for the
            // specified browser locale.
            localeLoaderService.loadProperties(commonLocaleURL, commonDefaultLocaleURL)
                .then(function(localeArray) {
                    var commonLocaleArray = localeArray;
                    // Pass in the common locales in the source array parameter, and then the module locales as the target parameter.
                    var locales = concatenateLocales(commonLocaleArray, moduleLocaleArray);
                    angular.module('LocaleModule', []).constant('LOCALE', locales);
                    angular.element(document).ready(function () {
                        angular.bootstrap(document, [global.moduleName]);
                    });
                },
                function(error) {
                    var errMsg = "ERROR: Could not resolve the common property file load for " + global.moduleName +" module.  Error is: " + error;
                    console.log(errMsg);
                    throw errMsg;
                });
        },
        function(error) {
            var errMsg = "ERROR: Could not resolve property file load for " + global.moduleName +" module.  Error is: " + error;
            console.log(errMsg);
            throw errMsg;
        });


})();

