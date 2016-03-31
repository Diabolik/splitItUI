/* Copyright 2015 Ellucian Company L.P. and its affiliates. */
'use strict';

//Setting module name
global.moduleName = 'RequestListing';

//Creating the module
require('./RequestListing.Module');

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
require('./services/Request.Service');
require('./services/Transcript.Service');

//Controllers
require('./RequestListing.Controller');

//Init Bootstrap Module
require('../common/Bootstrap.initModule');

//Loading routes
require('./RequestListing.RouteConfig');

//Starting App
require('./RequestListing.RunBlock');

