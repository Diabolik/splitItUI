/* Copyright 2008-2015 Ellucian Company L.P. and its affiliates. */

(function () {
    'use strict';

    angular
        .module(global.moduleName)
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'AgreementListingController',
                templateUrl: 'partials/AgreementListing.html',
                controllerAs: 'alc'
            })
            .when('/agreementListing/new', {
                controller: 'AgreementListingDetailController',
                templateUrl: 'partials/agreement.form.html',
                controllerAs: 'aldc'
            })
            .when('/agreements/:agreementId', {
                controller: 'AgreementListingAgreementController',
                templateUrl: 'partials/Agreement.html',
                controllerAs: 'ag'
            })
            .otherwise({redirectTo: '/'});

    }

})();