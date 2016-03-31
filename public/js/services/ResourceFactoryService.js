/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function ResourceFactoryService($resource, $location) {
    /*return {
        requests: function(){
            return $resource(':institutionId/api/requests', {institutionId:'@institutionId'}, {'query':  {method:'GET', isArray:true}});
        },
        request: function(){
            return $resource(':institutionId/api/requests/:requestId', {institutionId:'@institutionId',requestId:'@requestId'},{query: {method: "GET"}});
        },
        transcriptByRequestId: function(url){
            return $resource(':institutionId/api/requests/:requestId/transcripts', {institutionId:'@institutionId',requestId:'@requestId'},{query: {method: "GET"}});
        },
        articulationResultsByRequestId: function(url){
            return $resource(':institutionId/api/requests/:requestId/articulationResults', {institutionId:'@institutionId',requestId:'@requestId'},{query: {method: "GET"}});
        },
        agreementsByInstitution: function(url){
            return $resource(':institutionId/api/agreements', {institutionId:'@institutionId'}, {'query':  {method:'GET', isArray:true}});
        },
        findAgreement: function(){
            return $resource('/:institutionId/api/agreements/:agreementId', {institutionId:'@institutionId',agreementId:'@agreementId'},{query: {method: "GET"}});
        },
        deleteAgreement: function(){
            return $resource('/:institutionId/api/agreements/:agreementId', {institutionId:'@institutionId',agreementId:'@agreementId'},{query: {method: "DELETE"}});
        },
        saveAgreement: function(){
            return $resource(':institutionId/api/agreements', {institutionId:'@institutionId', agreement:'@agreement'}, {'query':  {method:'POST'}});
        },
        transcriptEvaluate: function(){
            return $resource(':institutionId/api/transcript/:transcriptId/evaluate',{institutionId:'@institutionId',transcriptId:'@transcriptId'},{'query':  {method:'GET', isArray:true}});
        },
        requestCreate: function(){
            return $resource(':institutionId/api/requests/', {institutionId:'@institutionId'},{save: {method: "POST"}});
        },
        requestPublish: function(){
            return $resource(':institutionId/api/requests/:requestId/publish', {institutionId:'@institutionId',requestId:'@requestId'},{query: {method: "GET"}});
        },
        requestArticulate: function(){
            return $resource(':institutionId/api/requests/:requestId/articulate', {institutionId:'@institutionId',requestId:'@requestId'},{query: {method: "GET"}});
        },
        findEquivalency: function(){
            return $resource('/:institutionId/api/equivalencies/:equivalencyId', {institutionId:'@institutionId',equivalencyId:'@equivalencyId'},{query: {method: "GET"}});
        },
        findEquivalenciesByRequest: function(){
            return $resource('/:institutionId/api/requests/:requestId/equivalencies', {institutionId:'@institutionId', requestId:'@requestId'}, {query:  {method:'GET', isArray:true}});
        },
        findEquivalenciesByAgreement: function(){
            return $resource('/:institutionId/api/agreements/:agreementId/equivalencies', {institutionId:'@institutionId', requestId:'@agreementId'}, {query:  {method:'GET', isArray:true}});
        },
        deleteEquivalency: function(){
            return $resource('/:institutionId/api/agreements/:agreementId/equivalencies/:equivalencyId', {institutionId:'@institutionId',equivalencyId:'@equivalencyId'},{query: {method: "DELETE"}});
        },
        saveEquivalency: function(){
            return $resource('/:institutionId/api/agreements/:agreementId/equivalencies', {institutionId:'@institutionId', agreementId:'@agreementId'}, {query:  {method:'POST'}});
        },
        retrieveOrCreateEquivalency:function(){
            return $resource('/:institutionId/api/request/:requestId/equivalencies/retrieveOverride', {institutionId:'@institutionId', requestId:'@requestId', overridePetition:'@overridePetition'}, {query:  {method:'POST'}});
        },
        saveOverrideSelection:function(){
            return $resource('/:institutionId/api/request/:requestId/equivalencies/saveOverrideSelection', {institutionId:'@institutionId', requestId:'@requestId', overridePetition:'@overridePetition'}, {query:  {method:'POST'}});
        },
        saveEquivalencyOverride:function(){
            return $resource('/:institutionId/api/request/:requestId/equivalencyOverride', {institutionId:'@institutionId', requestId:'@requestId'}, {query:  {method:'POST'}});
        },
        systemMessages: function(){
            return $resource('/api/systemmessages', null, {'query':  {method:'GET', isArray:true}});
        },
        institutions: function(){
            return $resource('/:institutionId/api/institutions',  {institutionId:'@institutionId'}, {'query':  {method:'GET', isArray:true}});
        },
        transcriptSave: function(){
            return $resource('/:institutionId/api/requests/:requestId/transcripts',  {institutionId:'@institutionId',requestId:'@requestId'},{save: {method: "POST"}});
        },
        findLocalCourse: function(){
            return $resource('/:institutionId/api/agreements/:agreementId/equivalencies/:equivalencyId/localCourses/:localCourseId', {institutionId:'@institutionId',localCourseId:'@localCourseId'},{query: {method: "GET"}});
        },
        deleteLocalCourse: function(){
            return $resource('/:institutionId/api/agreements/:agreementId/equivalencies/:equivalencyId/localCourses/:localCourseId', {institutionId:'@institutionId',localCourseId:'@localCourseId'},{query: {method: "DELETE"}});
        },
        saveLocalCourse: function(){
            return $resource('/:institutionId/api/agreements/:agreementId/equivalencies/:equivalencyId/localCourses', {institutionId:'@institutionId', localCourse:'@localCourse'}, {query:  {method:'POST'}});
        },
        createTransferCourse: function(){
            return $resource('/:institutionId/api/studentCourses/toTransferCourses/:studentCourseId', {institutionId:'@institutionId',studentCourseId:'@studentCourseId'},{query: {method: "GET"}});
        },
        findTransferCourse: function(){
            return $resource('/:institutionId/api/agreements/:agreementId/equivalencies/:equivalencyId/transferCourses/:transferCourseId', {institutionId:'@institutionId',transferCourseId:'@transferCourseId'},{query: {method: "GET"}});
        },
        deleteTransferCourse: function(){
            return $resource('/:institutionId/api/agreements/:agreementId/equivalencies/:equivalencyId/transferCourses/:transferCourseId', {institutionId:'@institutionId',transferCourseId:'@transferCourseId'},{query: {method: "DELETE"}});
        },
        saveTransferCourse: function(){
            return $resource('/:institutionId/api/agreements/:agreementId/equivalencies/:equivalencyId/transferCourses', {institutionId:'@institutionId', transferCourse:'@transferCourse'}, {query:  {method:'POST'}});
        },
        sessionSave: function(){
            return $resource('/:institutionId/api/transcripts/:transcriptId/sessions',  {institutionId:'@institutionId', transcriptId:'@transcriptId'},{save: {method: "POST"}});
        },
        courseSave: function(){
            return $resource('/:institutionId/api/transcripts/:transcriptId/sessions/:sessionId/courses',  {institutionId:'@institutionId', transcriptId:'@transcriptId', sessionId:'@sessionId'},{save: {method: "POST"}});
        },
        courseLevels: function(){
            return $resource('/:institutionId/api/courselevels',  {institutionId:'@institutionId'}, {'query':  {method:'GET', isArray:true}});
        },
        translateCourseLevelCode: function(){
            return $resource('/:institutionId/api/sourceInstitutionId/:sourceInstitutionId/translate/:levelCode',  {institutionId:'@institutionId', sourceInstitutionId:'@sourceInstitutionId', levelCode:'@levelCode'}, {'query':  {method:'GET'}});
        },
  
        courseLevelMap: function () {
            return $resource('/:institutionId/api/courseLevelMaps', {institutionId: '@institutionId'});
        },
        activityStream: function(){
            return $resource(':institutionId/api/request-activities', {institutionId:'@institutionId'}, {'query':  {method:'GET', isArray:true}});
        },
        requestSummary: function(){
            return $resource(':institutionId/api/stats/summary', {institutionId:'@institutionId'}, {'get':  {method:'GET'}});
        },
        articulationCourseLevels: function(){
            return $resource('/:institutionId/api/articulationCourseLevels',  {institutionId:'@institutionId'}, {'query':  {method:'GET', isArray:true}});
        },
        searchRequests: function(searchParam, sortColumn, order){
            return $resource('/:institutionId/api/requests/search',  {institutionId:'@institutionId', q:searchParam, sort: sortColumn, order: order}, {'query':  {method:'GET', isArray:true}});
        },
        searchByCriteria: function(queryString){
            return $resource('/api/searchByCriteria',  {queryString:queryString}, {'query':  {method:'GET'}});
        },
        getTranscriptMessages: function(){
            return $resource('/:institutionId/api/requests/:requestId/getTranscriptMessage',  {institutionId:'@institutionId', requestId:'@requestId'}, {'query':  {method:'GET', isArray:true}});
        }

    };*/
}
ResourceFactoryService.$inject = ["$resource", "$location"];
