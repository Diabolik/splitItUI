/*
 * *******************************************************************************
 *   Copyright 2015 Mercury Solutions.
 * *******************************************************************************
 */

var log = require("../services/loggingService");
var URITemplate = require('URIjs/src/URITemplate');

exports.buildURLForRetrieveOrCreateEquivalency = function buildURLForRetrieveOrCreateEquivalency(requestId) {
    var resourceURLTemplate = process.env.ETR_ARTICULATION_RETRIEVE_OR_CREATE_EQUIV ||
        "{protocol}://{host}:{port}/api/request/{requestId}/equivalencies/retrieveOverride"
    var serviceProtocol = process.env.ETR_REQUEST_MASTER_RESOURCE_PROTOCOL || 'http';
    var serviceHost = process.env.ETR_REQUEST_MASTER_RESOURCE_HOST || 'localhost';
    var servicePort = process.env.ETR_REQUEST_MASTER_RESOURCE_PORT || '3130';

    var template = new URITemplate(resourceURLTemplate);
    var url = template.expand({
        protocol: serviceProtocol,
        host: serviceHost,
        port: servicePort,
        requestId: requestId
    });

    log.info("URL for RetrieveOrCreateEquivalency:" + url)

    return url;
}

exports.buildURLForSaveOverrideSelection = function buildURLForSaveOverrideSelection(requestId) {
    var resourceURLTemplate = process.env.ETR_ARTICULATION_SAVE_OVERRIDE_SELECTION ||
        "{protocol}://{host}:{port}/api/request/{requestId}/equivalencies/saveOverrideSelection"
    var serviceProtocol = process.env.ETR_REQUEST_MASTER_RESOURCE_PROTOCOL || 'http';
    var serviceHost = process.env.ETR_REQUEST_MASTER_RESOURCE_HOST || 'localhost';
    var servicePort = process.env.ETR_REQUEST_MASTER_RESOURCE_PORT || '3130';

    var template = new URITemplate(resourceURLTemplate);
    var url = template.expand({
        protocol: serviceProtocol,
        host: serviceHost,
        port: servicePort,
        requestId: requestId
    });

    log.info("URL for SaveOverrideSelection:" + url)

    return url;
}


exports.buildURLForSaveEquivalencyOverride = function buildURLForSaveEquivalencyOverride(requestId) {
    var resourceURLTemplate = process.env.ETR_ARTICULATION_SAVE_OVERRIDE_SELECTION ||
        "{protocol}://{host}:{port}/api/request/{requestId}/equivalencyOverride"
    var serviceProtocol = process.env.ETR_REQUEST_MASTER_RESOURCE_PROTOCOL || 'http';
    var serviceHost = process.env.ETR_REQUEST_MASTER_RESOURCE_HOST || 'localhost';
    var servicePort = process.env.ETR_REQUEST_MASTER_RESOURCE_PORT || '3130';

    var template = new URITemplate(resourceURLTemplate);
    var url = template.expand({
        protocol: serviceProtocol,
        host: serviceHost,
        port: servicePort,
        requestId: requestId
    });

    log.info("URL for SaveEquivalencyOverride:" + url)

    return url;
}
