/*
 * *******************************************************************************
 *   Copyright 2015 Mercury Solutions.
 * *******************************************************************************
 */

//Build the message in the correct format
exports.buildError = function(e){
    var errorResponse = {};
    errorResponse.callingAPIHttpStatus="404";
    if(e && e.statusCode)
    {
        errorResponse.callingAPIHttpStatus=e.statusCode;
    }

    if(e){
        errorResponse.sourceErrorCode = e.code;
        errorResponse.sourceError = e.message;
    }
    return errorResponse;
};