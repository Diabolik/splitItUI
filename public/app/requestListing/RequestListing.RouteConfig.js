/* Copyright 2008-2015 Ellucian Company L.P. and its affiliates. */

(function () {
    'use strict';

    angular
        .module(global.moduleName)
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'RequestListingController',
                templateUrl: 'partials/RequestListing.html',
                controllerAs: 'rlc'
            })

            .otherwise({redirectTo: '/'});

    }

})();