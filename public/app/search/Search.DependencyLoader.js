/* Copyright 2015 Ellucian Company L.P. and its affiliates. */
'use strict'

//Setting module name
global.moduleName = 'search';

//Creating the module
require('./Search.Module');

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
require('./services/Search.Service');

//Controllers
require('./Search.Controller');

//Init Bootstrap
require('../common/Bootstrap.initModule');

//Load Routes
require('./Search.RouteConfig');

//Start App
require('./Search.RunBlock');