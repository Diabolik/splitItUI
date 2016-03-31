/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
(function() {
    angular.module(global.moduleName)
        .filter('i18n', i18nFilter);

    function i18nFilter(localeService) {
        return function(key) {
            return localeService.getValue(key);
        };

        return function(key, placeholder) {
            return localeService.getValueWithPlaceholders(key, placeholder);
        };
    }

    i18nFilter.$inject = ["localeService"];

})();