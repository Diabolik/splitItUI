/*
 * *******************************************************************************
 *   Copyright 2015 Mercury Solutions.
 * *******************************************************************************
 */

var URITemplate = require('URIjs/src/URITemplate');

exports.buildURLForFindUserByEmail = function buildURLForFindUserByEmail(email) {
    var resourceURLTemplate = process.env.ETR_ARTICULATION_RETRIEVE_OR_CREATE_EQUIV ||
        "{protocol}://{host}:{port}/api/users/email"
    var serviceProtocol = process.env.ETR_REQUEST_MASTER_RESOURCE_PROTOCOL || 'http';
    var serviceHost = process.env.ETR_REQUEST_MASTER_RESOURCE_HOST || 'localhost';
    var servicePort = process.env.ETR_REQUEST_MASTER_RESOURCE_PORT || '3130';

    var template = new URITemplate(resourceURLTemplate);
    var url = template.expand({
        protocol: serviceProtocol,
        host: serviceHost,
        port: servicePort,
        email: email
    });

    log.info("URL for RetrieveOrCreateEquivalency:" + url)

    return url;
}

/*exports.buildURLForSaveOverrideSelection = function buildURLForSaveOverrideSelection(requestId) {
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
}*/



