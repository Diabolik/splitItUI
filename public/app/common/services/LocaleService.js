/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
(function() {
    angular.module(global.moduleName)
        .factory('localeService', LocaleService);

    function LocaleService($log, LOCALE) {
        return {
            getValue: function (key) {
                var value = LOCALE[key];
                return value;
            },
            getValueWithPlaceholders: function (key, placeholders) {
                var value = LOCALE[key];
                value = vsprintf(value, placeholders);
                return value;
            }
        }

    }

    LocaleService.$inject = ["$log", "LOCALE"];

})();