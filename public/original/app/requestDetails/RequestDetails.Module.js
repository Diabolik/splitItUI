/* Copyright 2008-2015 Ellucian Company L.P. and its affiliates. */
(function () {
    'use strict';

    console.log("Creating: Request Details Module");
    // Set the LocaleModule first so that it will be available.  The main _moduleName app will reference it.  The LocaleModule
    // will be reset in the LocaleLoaderService after the i18n properties file is read, but setting it first here makes it available to the app.
    angular.module('LocaleModule', []);
    angular.module(global.moduleName, ['ngRoute', 'ngResource', 'ngCookies', 'angular-growl', 'ui.bootstrap', 'startup', 'LocaleModule'])
})();
