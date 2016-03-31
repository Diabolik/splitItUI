/* Copyright 2008-2014 Ellucian Company L.P. and its affiliates. */
function BootstrapModule(moduleName){
    var initInjector = angular.injector(['ng']);
    var $http = initInjector.get('$http');
    angular.element(document).ready(function() {
        angular.bootstrap(document, [moduleName]);
    });
}

