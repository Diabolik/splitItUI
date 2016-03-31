/* Copyright 2008-2015 Ellucian Company L.P. and its affiliates. */

(function () {
    'use strict';

    angular
        .module(global.moduleName)
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'partials/home.html',
                controllerAs: 'hc'
            })
            .otherwise({redirectTo: '/'});

    }

})();