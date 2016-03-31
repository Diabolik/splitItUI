/* Copyright 2008-2014 Ellucian Company L.P. and its affiliates. */
var mainModule = angular.module('mainModule', ['ngRoute', 'ngResource', 'ngCookies', 'angular-growl', 'ui.bootstrap', 'dialogs']);

mainModule.factory('applicationStartupService', ApplicationStartupService);
mainModule.factory('resourceFactoryService', ResourceFactoryService);
mainModule.factory('requestService', RequestService);
mainModule.factory('transcriptService', TranscriptService);
mainModule.factory('articulationResultsService', ArticulationResultsService);
mainModule.factory('transcriptEvaluationService', TranscriptEvaluationService);
mainModule.factory('agreementService', AgreementService);
mainModule.factory('equivalencyService', EquivalencyService);
mainModule.factory('equivalencyOverrideService', EquivalencyOverrideService);
mainModule.factory('systemMessageService', SystemMessageService);
mainModule.factory('institutionService', InstitutionService);
mainModule.factory('transcriptService', TranscriptService);
mainModule.factory('localCourseService', LocalCourseService);
mainModule.factory('transferCourseService', TransferCourseService);
mainModule.factory('sessionService', SessionService);
mainModule.factory('courseService', CourseService);
mainModule.factory('courseLevelService', CourseLevelService);
mainModule.factory('courseLevelMapService', CourseLevelMapService);
mainModule.factory('articulationCourseLevelService', ArticulationCourseLevelService);
mainModule.factory('searchService', SearchService);
mainModule.factory('i18nService', I18NService);
mainModule.factory('transcriptMessageService', TranscriptMessageService);

mainModule.controller('mainModuleController', MainModuleController);
mainModule.controller('headerController', HeaderController);
mainModule.controller('RequestListController', RequestListController);
mainModule.controller('requestDetailsController', RequestDetailsController);
mainModule.controller('transcriptController', TranscriptController);
mainModule.controller('articulationResultsController', ArticulationResultsController);
mainModule.controller('agreementListController', AgreementListController);
mainModule.controller('agreementDetailController', AgreementDetailController);
mainModule.controller('agreementSaveController', AgreementSaveController);
mainModule.controller('agreementController', AgreementDetailController);
mainModule.controller('equivalencySaveController', EquivalencySaveController);
mainModule.controller('equivalencyDetailController', EquivalencyDetailController);
mainModule.controller('equivalencyOverrideController', EquivalencyOverrideController);
mainModule.controller('equivalencyOverrideListController', EquivalencyOverrideListController);
mainModule.controller('equivalencyOverrideDetailController', EquivalencyOverrideListController);
mainModule.controller('modalsController', ModalsController);
mainModule.controller('transcriptEvaluationController', TranscriptEvaluationController);
mainModule.controller('homeController', HomeController);
mainModule.controller('systemMessagesListController', SystemMessageListController);
mainModule.controller('agreementFormController', AgreementFormController);
mainModule.controller('transcriptFormController', TranscriptFormController);
mainModule.controller('localCourseSaveController', LocalCourseSaveController);
mainModule.controller('localCourseDetailController', LocalCourseDetailController);
mainModule.controller('articulationCourseLevelController', ArticulationCourseLevelController);
mainModule.controller('transferCourseSaveController', TransferCourseSaveController);
mainModule.controller('transferCourseDetailController', TransferCourseDetailController);
mainModule.controller('createSessionController', CreateSessionController);
mainModule.controller('createCourseController', CreateCourseController);
mainModule.controller('courseLevelController', CourseLevelController);
mainModule.controller('courseLevelMapDetailController', CourseLevelMapDetailController);
mainModule.controller('searchController', SearchController);
mainModule.controller('suggestMatchController', SuggestMatchController);
mainModule.controller('transcriptMessageController', TranscriptMessageController);



// Set up our mappings between URLs, templates, and controllers
function mainApplicationConfig($routeProvider, $httpProvider) {
    //$httpProvider.interceptors.push('bfrTokenInterceptor');

    // Note that the menuKey values must match the values specified in navigation.html for each menu.
    $routeProvider.
        when('/requests', {
            controller: RequestListController,
            templateUrl: 'partials/requests.html',
            menuKey: 'REQUESTS'
        })
        .when('/systemmessages', {
            controller: SystemMessageListController,
            templateUrl: 'partials/systemmessages.html',
            menuKey: 'SYSMESSAGES'
        })
        .when('/requests/:requestId', {
            controller: RequestDetailsController,
            templateUrl: 'partials/request.html',
            menuKey: 'REQUEST'
        })
        .when('/requests/:requestId/transcripts/:transcriptId/sessions', {
            controller: CreateSessionController,
            templateUrl: 'partials/createSession.html',
            menuKey: 'REQUEST'
        })
        .when('/requests/:requestId/transcripts/:transcriptId/sessions/:sessionId/courses', {
            controller: CreateCourseController,
            templateUrl: 'partials/createCourse.html',
            menuKey: 'REQUEST'
        })
        .when('/agreements', {
            controller: AgreementListController,
            templateUrl: 'partials/agreements.html',
            menuKey: 'AGREEMENTS'
        })
        .when('/agreements/:agreementId', {
            controller: AgreementDetailController,
            templateUrl: 'partials/agreement.html',
            menuKey: 'AGREEMENT'
        })
        .when('/:institutionId/', {
            controller: HomeController,
            templateUrl: 'partials/home.html',
            menuKey: 'HOME'
        })
        .when('/', {
            controller: HomeController,
            templateUrl: 'partials/home.html',
            menuKey: 'HOME'
        })
        .when('/agreement/save', {
            templateUrl: 'partials/agreementForm.html',
            menuKey: 'AGREEMENT'
        })
        .when('/equivalency/save', {
            templateUrl: 'partials/equivalencyForm.html',
            menuKey: 'AGREEMENT'
        })
        .when('/equivalencies/:equivalencyId', {
            controller: EquivalencyDetailController,
            templateUrl: 'partials/equivalency.html',
            menuKey: 'AGREEMENT'
        })
        .when('/transcript/form', {
            controller: TranscriptFormController,
            templateUrl: 'partials/transcriptForm.html',
            menuKey: 'TRANSCRIPT'
        })
        .when('/localCourse/save', {
            templateUrl: 'partials/localCourseForm.html',
            menuKey: 'AGREEMENT'
        })
        .when('/localCourses/:localCourseId', {
            controller: LocalCourseDetailController,
            templateUrl: 'partials/localCourse.html',
            menuKey: 'AGREEMENT'
        })
        .when('/transferCourse/save', {
            templateUrl: 'partials/transferCourseForm.html',
            menuKey: 'AGREEMENT'
        })
        .when('/transferCourses/:transferCourseId', {
            controller: TransferCourseDetailController,
            templateUrl: 'partials/transferCourse.html',
            menuKey: 'AGREEMENT'
        })
        .when('/requests/:requestId/resolveUndecidedArticulation', {
            controller: UndecidedArticulationDetailController,
            templateUrl: 'partials/undecidedArticulation.html',
            menuKey: 'REQUEST'
        })
        .when('/equivalencyOverride/editFullEquivalency', {
            controller: EquivalencyOverrideDetailController,
            templateUrl: 'partials/EquivalencyOverrideEditFull.html',
            menuKey: 'REQUEST'
        })
        .when('/equivalencyOverride/editEquivalencyLocalCourses', {
            controller: EquivalencyOverrideDetailController,
            templateUrl: 'partials/EquivalencyOverrideEditLocalCourses.html',
            menuKey: 'REQUEST'
        })
    ;
}

mainModule.config(["$routeProvider", "$httpProvider", mainApplicationConfig]);

mainModule.run(["applicationStartupService", "$rootScope", "$log",
    function (applicationStartupService, $rootScope, $log) {
        applicationStartupService.init();

        // When this module loads, it listens for the routeChangeSuccess event.  This should be received
        // when the module is loaded before most anything else happens.  It populates the menuKey with the
        // value defined in the route provider above.  This menuKey is used in the bfrNavigationController
        // to set the menu for the current page as active.
        $rootScope.$on("$routeChangeSuccess", function (angularEvent, currentRoute, previousRoute) {
            //$rootScope.menuKey = currentRoute.menuKey;
        });
    }
]);
