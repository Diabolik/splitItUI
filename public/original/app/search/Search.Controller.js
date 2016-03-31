/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */

(function () {
    'use strict';

    console.log("Search.Controller");
    angular
        .module(global.moduleName)
        .controller('SearchController', ['SearchService', 'localeService', '$routeParams',  SearchController]);

    function SearchController(SearchService, LocaleService, $routeParams) {
        var vm = this;

        function buildName(transcript) {
            var fullName = "";
            if (transcript.student.lastName) {
                fullName = fullName + transcript.student.lastName;
                if (transcript.student.firstName) {
                    fullName = transcript.student.firstName + " " + fullName;
                }
            }
            if (fullName == "") {return LocaleService.getValue("common.request.notAvailableMessage")};
            return fullName;
        }

        function buildStudentCode(transcript) {
            if (transcript.student) { return transcript.student.code;}
            else { return LocaleService.getValue("common.request.notAvailableMessage"); }
        }

        function buildCycleTime(cycleTime) {
            var textDays = LocaleService.getValue("searchResults.cycleTime.suffix.days");
            var textHours = LocaleService.getValue("searchResults.cycleTime.suffix.hours");
            return cycleTime.days + textDays + " " + cycleTime.hours + textHours;
        };

        //Anonymous  functions exposed
        vm.initData = function(){
            vm.queryString = $routeParams.queryString;
            vm.requestResults = [];
            vm.transcriptResults = [];
            vm.agreementResults = [];

            SearchService.searchByCriteria(vm.queryString).then(function (response) {
                var results = response.hits.hits;

                for(var item in results) {
                    var elementHit = {
                        type: results[item]._type,
                        id: results[item]._id,
                        source: results[item]._source
                    };

                    switch(results[item]._type) {
                        case 'requests':
                            elementHit.source.studentName = buildName(elementHit.source.transcript)
                            elementHit.source.studentCode = buildStudentCode(elementHit.source.transcript)
                            elementHit.source.fixedCycleTime = buildCycleTime(elementHit.source.cycleTime)
                            elementHit.source.fixedStatusCode = LocaleService.getValue("common.request.status." + elementHit.source.statusCode);
                            vm.requestResults.push(elementHit);
                            break;
                        case 'agreements':
                            vm.agreementResults.push(elementHit);
                            break;
                    }
                }
            });
        }

        //Retrieving the data from the server.
        vm.initData();
    }
})();