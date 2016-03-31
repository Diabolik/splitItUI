/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */

(function () {
    'use strict';
    console.log("Institution.Resource");

    angular
        .module(global.moduleName)
        .factory('RemoteResource', ["$resource", RemoteResource]);

    function RemoteResource($resource) {
        return {
            search: function () {
                return $resource('/api/searchByCriteria?queryString=:queryString', {queryString: '@queryString'}, {
                    'byCriteria': {}
                });
            },
            articulation: function () {
                return $resource('/:institutionId/api/requests/:requestId/articulationResults', {institutionId: '@institutionId', requestId:'@requestId'});
            },
            requests: function () {
                return $resource('/:institutionId/api/requests/:requestId', {institutionId: '@institutionId', requestId:'@requestId'}, {
                    'listAll': {
                        method: 'GET',
                        isArray: true
                    },
                    'query': {
                        method: 'GET',
                        isArray: false
                    }
                });
            },
            transcripts: function () {
                return $resource('/api/institutions/:institutionId/transcripts/:transcriptId', {institutionId: '@institutionId', transcriptId: '@transcriptId'}, {
                    'query': {
                        method: 'GET',
                        isArray: false
                    }
                });
            },
            institutions: function () {
                return $resource('/:institutionId/api/institutions', {institutionId: '@institutionId'}, {
                    'query': {
                        method: 'GET',
                        isArray: true
                    }
                });
            },
            courseLevelMapsByInstitution: function () {
                return $resource('/:institutionId/api/courseLevelMaps', {institutionId: '@institutionId'}, {
                    'query': {
                        method: 'GET',
                        isArray: true
                    }
                });
            },
            courseLevels: function () {
                return $resource('/:institutionId/api/courselevels', {institutionId: '@institutionId'}, {
                    'query': {
                        method: 'GET',
                        isArray: true
                    }
                });
            },
            /**
             * This resource should be used for GET, POST, PUT and all the other operations over CourseLevelMap
             * e.g. courseLevelMap.post(...), courseLevelMap.get(...), etc
             */
            courseLevelMap: function () {
                return $resource('/:institutionId/api/courseLevelMaps', {institutionId: '@institutionId'});
            },

            agreements: function () {
                return $resource('/:institutionId/api/agreements/:agreementId', {institutionId: '@institutionId', agreementId:'@agreementId'}, {
                    'listAll': {
                        method: 'GET',
                        isArray: true
                    }
                });
            },
            equivalencies: function(){
                return  $resource('/:institutionId/api/agreements/:agreementId/equivalencies', {institutionId:'@institutionId', agreementId:'@agreementId'}, {
                    'query': {
                        method: 'GET',
                        isArray: true
                    }
                });
            }

        };
    }
})();

