/* Copyright 2008-2015 Ellucian Company L.P. and its affiliates. */

(function () {
    'use strict';

    angular
        .module(global.moduleName)
        .run(runBlock);

    runBlock.$inject = ["ApplicationStartupService", "$rootScope", "$log"];

    function runBlock(applicationStartupService, $rootScope, $log) {
        applicationStartupService.init();
        $log.info("RUNNNING NOW");
    }
})();