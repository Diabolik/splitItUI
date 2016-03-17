/**
 * Copyright 2015 Ellucian Company L.P. and its affiliates.
 */

/* This function builds a HTTP options structure used in a request*/
exports.build = function(httpMethod,uri,json){
    var options = {
        method: httpMethod,
        uri: uri,
        headers: {'Content-Type': 'application/json'},
        json: json
    };
    return options;
};