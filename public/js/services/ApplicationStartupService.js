/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */
function ApplicationStartupService($rootScope) {
    return {
        init: function() {
            if(!isLocalStorageSupported){
                alert('your browser does not support HTML5 storage');
            }
        }
    };

    function isLocalStorageSupported() {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            return false;
        }
    }
}
ApplicationStartupService.$inject = ["$rootScope"];
