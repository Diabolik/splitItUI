/*
 * *******************************************************************************
 *   Copyright 2015 Mercury Solutions.
 * *******************************************************************************
 */
var userService = require('../services/userService');

exports.findUserByEmail = function (req, res) {
    var email = req.params.email;
    var overridePetition = req.body.overridePetition

    return userService
        .findUserByEmail(requestId, overridePetition)
        .then(function (response) {
            if(response[0].statusCode==200) {
                res.status(200).json(response);
            }
            else{
                //log.info("Error:"+response)
                res.status(400).send(response[1]);
            }
        })
        .catch(function (response) {
            res.status(400).send(response);
        });
}


/*var institutionService = require("../services/institutionService");

exports.find = function(req,res) {
    var institutionId = institutionService.getIdFromRequest(req);
    var equivalencyId = req.params.equivalencyId
    var requestId = req.params.requestId
    log.info("Got from request: institutionId=" + institutionId + " equivalency Id=" + equivalencyId + " localCourse " +  requestId );
    var response = localCourseService.findLocalCourse(institutionId, requestId,function(externalAPIresponse){
            var result =  JSON.parse(externalAPIresponse);
            res.status(200).json(result);
        },
        function(externalAPIresponse){
            log.info("Got a error back from the list call");
            res.status(400).send(externalAPIresponse);
        }
    )

}

exports.delete = function(req,res) {
    var institutionId = institutionService.getIdFromRequest(req);
    var equivalencyId = req.params.equivalencyId
    var requestId = req.params.requestId
    log.info("Got from request: institutionId=" + institutionId + " equivalency Id=" + equivalencyId + " localCourse " +  requestId );
    var response = localCourseService.deleteLocalCourse(requestId, function(externalAPIresponse){
            res.status(200).send("Delete Success");
        },
        function(externalAPIresponse){
            log.info("Got a error back from the delete call");
            res.status(400).send(externalAPIresponse);
        }
    )
}

exports.save = function(req,res) {
    var localCourse = req.body
    var response = localCourseService.saveLocalCourse( localCourse.localCourse, function(externalAPIresponse){
            res.status(200).send("Save Success");
        },
        function(externalAPIresponse){
            log.info("Got a error back from the save call");
            res.status(400).send(externalAPIresponse);
        }
    )
}*/