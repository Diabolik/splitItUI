/* Copyright 2008-2014 Ellucian Company L.P. and its affiliates. */
var mainModule = angular.module('mainModule', ['ngRoute', 'ngResource', 'ngCookies', 'angular-growl', 'ui.bootstrap', 'dialogs']);

mainModule.factory('applicationStartupService', ApplicationStartupService);
mainModule.factory('resourceFactoryService', ResourceFactoryService);

mainModule.controller('mainModuleController', MainModuleController);
mainModule.controller('headerController', HeaderController);
mainModule.controller('homeController', HomeController);

// Set up our mappings between URLs, templates, and controllers
function mainApplicationConfig($routeProvider, $httpProvider) {
    //$httpProvider.interceptors.push('bfrTokenInterceptor');

    // Note that the menuKey values must match the values specified in navigation.html for each menu.
    $routeProvider.
        when('/', {
            controller: HomeController,
            templateUrl: 'partials/home.html',
            menuKey: 'HOME'
        })
        
    ;
}

mainModule.config(["$routeProvider", "$httpProvider", mainApplicationConfig]);

mainModule.run(["applicationStartupService", "$rootScope", "$log",
    function (applicationStartupService, $rootScope, $log) {
        applicationStartupService.init();
    }
]);
