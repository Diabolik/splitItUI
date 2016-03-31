/* Copyright 2015 Ellucian Company L.P. and its affiliates. */
'use strict';

//Setting module name
global.moduleName = 'configuration';

//Creating the module
require('./Configuration.Module');

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
require('./services/CourseLevel.Service');
require('./services/CourseLevelMap.Service');

//Controllers
require('./Configuration.Controller');
require('./controllers/CourseLevelMap.list.Controller');
require('./controllers/CourseLevelMap.detail.Controller');

//Init Bootstrap
require('../common/Bootstrap.initModule')

//Loading routes
require('./Configuration.RouteConfig');

//Starting App
require('./Configuration.RunBlock');


