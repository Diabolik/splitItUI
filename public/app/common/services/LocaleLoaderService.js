/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
(function() {
    angular.module(global.moduleName)
           .factory('localeLoaderService', LocaleLoaderService);


    function LocaleLoaderService($log) {

        // Parses the content from the i18n properties file into a locale array object.
        var buildLocaleArray = function (messages) {
            var messageLines = messages.split("\n");
            var locales = new Object();
            for (var i = 0; i < messageLines.length; i++) {
                var messageLine = messageLines[i];
                if (messageLine.indexOf("=") > -1) {
                    var keyValue = messageLine.split("=");
                    locales[keyValue[0]] = keyValue[1];
                }
            }
            return locales;
        }


        return {
            loadProperties: function(localeURL, defaultLocaleURL) {
                var initInjector = angular.injector(['ng']);
                var $http = initInjector.get('$http');
                var $q = initInjector.get('$q');

                var deferred = $q.defer();

                $http({
                    url: localeURL,
                    method: 'GET'
                }).then(function (response) {
                        var locales = buildLocaleArray(response.data);
                        // Reset the LocaleModule with the loaded locales from the i18n properties file.
                        $log.info("Built locales from URL: " + localeURL);
                        deferred.resolve(locales);
                    },
                    function (err) {
                        $http({
                            url: defaultLocaleURL,
                            method: 'GET'
                        }).then(function (response) {
                            var locales = buildLocaleArray(response.data);
                            // Reset the LocaleModule with the loaded default locales from the i18n default properties file.
                            $log.info("Built default locales from URL: " + defaultLocaleURL);
                            deferred.resolve(locales);
                        },
                        function(err) {
                            var errMsg = "Error occurred trying to load the default properties file: " + err;
                            $log.error(errMsg);
                            deferred.reject(errMsg)
                        })
                    }
                );
                // Return the promise that will contain the moduleName.
                return deferred.promise;
            },

            buildLocaleURL: function( pathToFile, moduleName ) {
                var localeURL = null;

                // First get the locale language from the browser.
                var language = window.navigator.userLanguage || window.navigator.language;
                if (language) {
                    localeURL = pathToFile + '/' + moduleName + '_' + language.toLowerCase() + '.properties';
                }
                // It is OK to return null if the browser locale is not set, that's why there is a default locale URL function.
                return localeURL;
            },

            buildDefaultLocaleURL: function( pathToFile, moduleName ) {
                var defaultLocaleURL = pathToFile + '/' + moduleName + '_default.properties';
                return defaultLocaleURL;
            }
        }
    }

    LocaleLoaderService.$inject = ["$log"];

})();