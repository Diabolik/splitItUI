/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */

(function () {
    'use strict';
    console.log("Home.Controller");
    angular
        .module(global.moduleName)
        .controller('HomeController', HomeController);


    function HomeController() {
        /* jshint validthis: true */
        var viewModel = this;

        // TEMPORARY: Load up some static data to display in the home page for now.
        viewModel.students = studentData();
        viewModel.activities = activityStream();
    }

    // TEMPORARY: Test function for supplying static data to the home.html page so that we can show how the ng-repeat directive is used in Angular on that page.
    var studentData = function() {
        var students = [];
        var student = new Object();
        student.name = "Agassi, Andre";
        student.institution = "Texas A&M University";
        student.transcriptDate = "07-JUL-2015";
        students.push(student);
        student = new Object();
        student.name = "Becker, Boris";
        student.institution = "University of Dallas";
        student.transcriptDate = "07-JUL-2015";
        students.push(student);
        student = new Object();
        student.name = "Sampras, Pete";
        student.institution = "University of Houston";
        student.transcriptDate = "07-JUL-2015";
        students.push(student);
        student = new Object();
        student.name = "Federer, Roger";
        student.institution = "Harvard University";
        student.transcriptDate = "07-JUL-2015";
        students.push(student);
        return students;
    }

    // TEMPORARY: Test function for supplying static data to the home.html page for the activity stream part of the page.
    var activityStream = function() {
        var activities = [];
        var activity = new Object();
        activity.name = "System";
        activity.message = " articulated the transcript for Agassi, Andre on 06-JUL-2015";
        activities.push(activity);
        activity = new Object();
        activity.name = "Smith, Jane";
        activity.message = " edited the transcript for Sampras, Pete on 06-JUL-2015";
        activities.push(activity);
        activity = new Object();
        activity.name = "Smith, Jane";
        activity.message = " created a transcript for Becker, Boris on 06-JUL-2015";
        activities.push(activity);
        return activities;
    }

})();