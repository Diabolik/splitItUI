/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */

(function () {
    'use strict';
    console.log("SearchService");

    angular
        .module(global.moduleName)
        .factory('SearchService', ["RemoteResource", "AppDataProvider", SearchService]);

    function SearchService(RemoteResource) {

        return {
            searchByCriteria: function (queryString) {
                return RemoteResource.search().byCriteria({queryString: queryString}).$promise;
            }
        };
    }
})();

