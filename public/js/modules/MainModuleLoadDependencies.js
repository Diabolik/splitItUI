/* Copyright 2015 Ellucian Company L.P. and its affiliates. */
/* Load the JavaScript dependency files for this module in the correct order.
 *
 * The flow here is to get all the JS files first and then engage the Angular application
 */

/*
 * The order of operation is:
 *
 * coreDependencies
 * applicationDependencies
 * module definition
 * module bootstrap (startup)
 * finalDependencies
 *
 */

var coreDependencies = [
    "lib/web-app_js_json2.min.js",
    "lib/angular/angular.min.js"
];

var applicationDependencies = [
    "lib/angular/angular-resource.min.js",
    "lib/angular/angular-route.min.js",
    "lib/angular/angular-cookies.min.js",
    "lib/growl/angular-growl.min.js",
    "lib/dialogs.min.js",
    "lib/ui-bootstrap-tpls-0.13.4.js",
    // Begin application Javascript replacement
    "js/modules/BootstrapModule.js",
    "js/controllers/MainModuleController.js",
    "js/controllers/HeaderController.js",
    "js/controllers/HomeController.js",
    "js/services/ApplicationStartupService.js",
    "js/services/RequestService.js",
    "js/services/ResourceFactoryService.js"
    // End application Javascript replacement
];

var module = [
    // Begin module Javascript replacement
    "js/modules/MainModule.js"
    // End module Javascript replacement
];

var moduleBootstrap = [
    "js/modules/MainModuleBootstrap.js"
];

var finalDependencies = [
    //add any js to be loades last here.
];


/* Load each group of dependencies in the correct order */
$script(coreDependencies,'core');
$script.ready('core', function() {
    $script(applicationDependencies,'application');
});
$script.ready('application', function() {
    $script(module,'module');
});

$script.ready('module', function() {
    $script(moduleBootstrap,'moduleBootstrap');
});

$script.ready('moduleBootstrap', function() {
    $script(finalDependencies,'final');
});



