/* Copyright 2008-2015 Ellucian Company L.P. and its affiliates. */

(function () {
    'use strict';

    angular
        .module(global.moduleName)
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/requests/:requestId', {
                controller: 'RequestDetailsController',
                templateUrl: 'partials/requestDetails.html',
                controllerAs: 'rdc'
            })
            .when('/requestsAction/:requestId', {
                controller: 'ActionNeededDetailsController',
                templateUrl: 'partials/actionNeededDetails.html',
                controllerAs: 'and'
            })
            .when('/', {
                controller: 'RequestDetailsController',
                templateUrl: 'partials/requestDetails.html',
                controllerAs: 'rdc'
            })
            .otherwise({redirectTo: '/'});

        console.log("CONFIGURED ROUTE");
    }
})();