/* Copyright 2015 Ellucian Company L.P. and its affiliates. */
'use strict'

//Setting module name
global.moduleName = 'home';

//Creating the module
require('./Home.Module');

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

//Controllers
require('./Home.Controller');
//Init Bootstrap
require('../common/Bootstrap.initModule');

//Load Routes
require('./Home.RouteConfig');

//Start App
require('./Home.RunBlock');




