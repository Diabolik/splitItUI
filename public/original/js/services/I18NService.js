/*
 *
 *  * *******************************************************************************
 *  *   Copyright  2015 Ellucian Company L.P. and its affiliates.
 *  * *******************************************************************************
 *
 */

function I18NService() {

    return {
        getStatusDescription: function(statusCode) {
            if(statusCode == 'RC')
                return 'System created a request to start tracking';
            if(statusCode == 'FR')
                return 'System received transcript file';
            if(statusCode == 'FF')
                return 'Error receiving transcript file';
            if(statusCode == 'IC')
                return 'System imported the transcript file';
            if(statusCode == 'IF')
                return 'Error importing transcript file';
            if(statusCode == 'AC')
                return 'System completed articulation';
            if(statusCode == 'AF')
                return 'Error articulating the transcript file';
            if(statusCode == 'TC')
                return 'Translation complete';
            if(statusCode == 'TF')
                return 'Error translating the transcript file';
            if(statusCode == 'ERR.ART.100')
                return 'Attendance date out of range.';
            if(statusCode == 'ERR.ART.101')
                return 'Insufficient grade.';
            if(statusCode == 'ERR.ART.102')
                return 'Equivalency is incomplete.';
            if(statusCode == 'ERR.ART.103')
                return 'Course level mismatch.';
            if(statusCode == 'ERR.ART.104')
                return 'No match found.';
            else {
                if (statusCode == undefined) {
                    return "Is Undefined";
                }
                var test = statusCode.split(',');
                if(test.length > 1) {
                    var text = "";
                   test.forEach(function(code) {
                        text += I18NService().getStatusDescription(code) + " ";
                    });
                    return text.trim();
                }
            }
            return statusCode;
        }
    };
}
I18NService.$inject = [];