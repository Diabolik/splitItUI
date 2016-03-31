/* Copyright 2008-2015 Ellucian Company L.P. and its affiliates. */

(function () {
    'use strict';

    angular
        .module(global.moduleName)
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'ConfigurationController',
                templateUrl: 'partials/home.html',
                controllerAs: 'ct'
            })
            .when('/courseLevelMap', {
                controller: 'CourseLevelMapController',
                templateUrl: 'partials/courseLevelMap.html',
                controllerAs: 'cl'
            })
            .when('/courseLevelMap/new', {
                controller: 'CourseLevelMapDetailController',
                templateUrl: 'partials/courseLevelMap.form.html',
                controllerAs: 'cl'
            })
            .otherwise({redirectTo: '/'});

        console.log("CONFIGURED ROUTE");
    }
})();