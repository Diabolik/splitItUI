/* Copyright 2015 Ellucian Company L.P. and its affiliates. */
'use strict';

//Setting module name
global.moduleName = 'AgreementListing';

//Creating the module
require('./AgreementListing.Module');

//Loading Commons
require('../common/Remote.Resource');
require('../common/Institution.Service');
require('../common/AppData.Provider');
require('../common/AppData.Controller');
require('../common/services/LocaleService');
require('../common/services/LocaleLoaderService');
require('../common/filters/i18nFilter');
require('../common/Application.startupService');
require('../common/SideBar.Directive');
require('../common/SideBar.Controller');

//Services
require('./services/Agreement.Service');
require('./services/Equivalency.Service');

//Controllers
require('./AgreementListing.Controller');
require('./controllers/AgreementListing.Detail.Controller');
require('./controllers/AgreementListing.Agreement.Controller');

//Init Bootstrap Module
require('../common/Bootstrap.initModule');

//Loading routes
require('./AgreementListing.RouteConfig');

//Starting App
require('./AgreementListing.RunBlock');

