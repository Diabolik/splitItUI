/*
 * *******************************************************************************
 *   Copyright 2015 Mercury Solutions.
 * *******************************************************************************
 */
var errorService = require("./errorService");
var promise = require("bluebird");
var userURLBuilder = require('../builders/userURLBuilder');
var httpOptionsBuilder = require('../builders/httpOptionsBuilder');
var request = promise.promisify(require("request"));

promise.promisifyAll(request);

exports.findUserByEmail = function (requestId, overridePetition) {

    var url = userURLBuilder.buildURLForFindUserByEmail(requestId)
    var opts = httpOptionsBuilder.build("POST", url, overridePetition)
    //Returns a promise to get the resource.
    return request(opts);
}

/*exports.saveOverrideSelection = function (requestId, overridePetition) {
    var url = userURLBuilder.buildURLForSaveOverrideSelection(requestId)
    var opts = httpOptionsBuilder.build("POST", url, overridePetition)
    //Returns a promise to get the resource.
    return request(opts);
}

exports.saveEquivalencyOverride = function (requestId, equivalencyOverride) {
    var url = userURLBuilder.buildURLForSaveEquivalencyOverride(requestId)
    var opts = httpOptionsBuilder.build("POST", url, equivalencyOverride)
    //Returns a promise to get the resource.
    return request(opts);
}*/

/*
var request = require('request');
var errorService = require("./errorService");

exports.findUserByEmail = function(email, onSuccess, onFailure){
    request.post(buildfindUserByEmailURL(email), function (error, response, body) {
        if (!error && response.statusCode == 200) {
            onSuccess(body);
        }else{
            onFailure(errorService.buildError(error));
        }
    })
}



exports.saveLocalCourse = function(localCourse, onSuccess, onFailure){
    var dataString = localCourse;
    var headers = { 'Content-Type': 'application/json' };

    var options = {
        headers: headers,
        json: dataString
    };

    request.post(buildSaveLocalCourseURL(localCourse.equivalencyId), options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            onSuccess(body);
        }else{
            onFailure(errorService.buildError(error));
        }
    })
}

function buildfindUserByEmailURL(email) {
    var requestResourcePathApi = process.env.ETR_SERVICE_RESOURCE_API || '/api';
    var requestResourcePathLocalCourse = process.env.ETR_SERVICE_RESOURCE_ || '/localCourses';
    var requestResourceEquivalencies = process.env.ETR_SERVICE_RESOURCE_ || '/equivalencies/';
    var serviceHost = process.env.ETR_SERVICE_ART_HOST_URL || 'http://localhost';
    var servicePort = process.env.ETR_SERVICE_ART_PORT || '3110';
    var url = serviceHost + ":" + servicePort + requestResourcePathApi +requestResourceEquivalencies + equivalencyId + requestResourcePathLocalCourse ;

    log.info("Build save request URL: " + url);
    return url;
}*/
