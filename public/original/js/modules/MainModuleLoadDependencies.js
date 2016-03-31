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
    "js/controllers/RequestListController.js",
    "js/controllers/RequestDetailsController.js",
    "js/controllers/TranscriptController.js",
    "js/controllers/ArticulationResultsController.js",
    "js/controllers/AgreementListController.js",
    "js/controllers/AgreementDetailController.js",
    "js/controllers/AgreementSaveController.js",
    "js/controllers/ModalsController.js",
    "js/controllers/HomeController.js",
    "js/controllers/TranscriptEvaluationController.js",
    "js/controllers/EquivalencyDetailController.js",
    "js/controllers/EquivalencySaveController.js",
    "js/controllers/EquivalencyOverrideController.js",
    "js/controllers/EquivalencyOverrideListController.js",
    "js/controllers/EquivalencyOverrideDetailController.js",
    "js/controllers/UndecidedArticulationDetailController.js",
    "js/controllers/SystemMessageListController.js",
    "js/controllers/AgreementFormController.js",
    "js/controllers/TranscriptFormController.js",
    "js/controllers/CreateSessionController.js",
    "js/controllers/CreateCourseController.js",
    "js/controllers/CourseLevelController.js",
    "js/controllers/CourseLevelMapDetailController.js",
    "js/controllers/SearchController.js",
    "js/services/ApplicationStartupService.js",
    "js/services/RequestService.js",
    "js/services/ArticulationResultsService.js",
    "js/services/AgreementService.js",
    "js/services/ResourceFactoryService.js",
    "js/services/TranscriptEvaluationService.js",
    "js/services/EquivalencyService.js",
    "js/services/EquivalencyOverrideService.js",
    "js/services/SystemMessageService.js",
    "js/services/InstitutionService.js",
    "js/services/TranscriptService.js",
    "js/services/LocalCourseService.js",
    "js/controllers/LocalCourseDetailController.js",
    "js/controllers/LocalCourseSaveController.js",
    "js/controllers/SuggestMatchController.js",
    "js/services/TransferCourseService.js",
    "js/controllers/TransferCourseDetailController.js",
    "js/controllers/TransferCourseSaveController.js",
    "js/services/SessionService.js",
    "js/services/CourseService.js",
    "js/services/CourseLevelService.js",
    "js/services/CourseLevelMapService.js",
    "js/controllers/ArticulationCourseLevelController.js",
    "js/services/ArticulationCourseLevelService.js",
    "js/services/SearchService.js",
    "js/services/I18NService.js",
    "js/services/TranscriptMessageService.js",
    "js/controllers/TranscriptMessageController.js"
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



