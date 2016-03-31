/* Copyright 2015 Ellucian Company L.P. and its affiliates. */
'use strict';

//Setting module name
global.moduleName = 'RequestDetails';

//Creating the module
require('./RequestDetails.Module');

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
require('./services/RequestDetails.Service');
require('./services/TranscriptDetails.Service');
require('./services/ArticulationDetails.Service');

//Controllers
require('./RequestDetails.Controller');
require('./controllers/MatchesDetails.Controller');
require('./controllers/ProgressBar.Controller');
require('./controllers/ActionNeeded.Controller');
require('./controllers/ActionNeededDetails.Controller');

//Init Bootstrap
require('../common/Bootstrap.initModule')

//Loading routes
require('./RequestDetails.RouteConfig');

//Starting App
require('./RequestDetails.RunBlock');



