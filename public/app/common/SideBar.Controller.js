/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */

(function () {
    'use strict';

    console.log("SideBarController");
    angular
        .module(global.moduleName)
        .controller('SideBarController', ['$window', SideBarController]);

    function SideBarController($window) {
        var vm = this;

        //Anonymous  functions exposed
        vm.searchByCriteria = function(){
            console.log(vm.queryString)
            $window.location.href = "/app/search/#/" + vm.queryString
        }
    }
})();