/* Copyright 2008-2015 Ellucian Company L.P. and its affiliates. */

(function () {
    'use strict';

    angular
        .module(global.moduleName)
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'SearchController',
                templateUrl: 'partials/results.html',
                controllerAs: 'sc'
            })
            .when('/:queryString', {
                controller: 'SearchController',
                templateUrl: 'partials/results.html',
                controllerAs: 'sc'
            })
            .otherwise({redirectTo: '/'});
    }

})();