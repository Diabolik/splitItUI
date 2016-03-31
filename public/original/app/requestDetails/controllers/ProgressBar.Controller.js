/*
 * *******************************************************************************
 *   Copyright 2015 Ellucian Company L.P. and its affiliates.
 * *******************************************************************************
 */

(function () {
    'use strict';

    console.log("ProgressBar.Controller");
    angular
        .module(global.moduleName)
        .controller('ProgressBarController', [ 'localeService', '$scope',  ProgressBarController]);

    function ProgressBarController( LocaleService, $scope) {
        var vm = this;

        // This array will indicate the step for every given status
        // As the starting point Request created is indicating the stating point
        // and the rest of the statuses links to the processing part
        // Done status has not being defined

        var trackingStatus =
            [[1,'RC'],
             [2,'IC', 'TF', 'FR', 'FF', 'IF', 'TC', 'AF','AC'],
             [3,'']];


        var numberOfPossibleStatus = 3;

        $scope.$on('requestStatusCode', function (event, data) {
            console.log("Broadcast data received " + data);
            vm.initProgressBar(data);
        });

        // gets request data
        vm.initProgressBar = function (requestStatus) {
            console.log("Setting up ProgressBar with Status " + requestStatus);
            var trackBarStyles = initializeTrackBar();

            var statusBarValue = 0;

            var statusDescription = LocaleService.getValue("common.request.status."+ requestStatus);

            statusBarValue = translateStatusToTrackBar(requestStatus, trackBarStyles)

            if(statusBarValue> 0){
                var stepLabel = LocaleService.getValue("requestDetails.summary.trackBar["+statusBarValue+"]");
                var stepAriaLabel =LocaleService.getValue("requestDetails.summary.trackBar.ariaValueText").replace("{1}", statusBarValue).replace("{2}",stepLabel )

                var ariaStatusBar= { 'valueNow': statusBarValue, 'valueMin': 1 , 'valueMax':numberOfPossibleStatus,
                    'valueText': stepAriaLabel };

                var progressBar = {'statusDescription': statusDescription,'statusCodeBar':trackBarStyles,'ariaStatusBar':ariaStatusBar};

                vm.progressBar = progressBar;
            } else{
                console.log("Problem getting Step. Not able to setup progress Bar")
            }
        };

        /**
         * Sets an array with the number of empty strings defined by numberOfPossibleStatus
         * @returns {Array}
         */
        function initializeTrackBar(){
            var trackArray = [];
            for(var i= 1; i<= numberOfPossibleStatus ; i++ ){
                trackArray[i] = "";
            }
            return trackArray;
        }

        /**
         * Sets the appropriate style for every item in trackArray
         * and returns the current step defined by trackingStatus array
         * if requestStatus is not found return -1
         * @param requestStatus
         * @param trackArray
         * @returns {number}
         */
        function translateStatusToTrackBar(requestStatus, trackArray){
            var trackBarIndex = -1;
            var i= 0;

            var statusFound = false;
            // Find Status level position
            if(requestStatus){
                while(!statusFound && (i<trackingStatus.length)){
                    var j= 1;
                    while(!statusFound && (j<trackingStatus[i].length)){
                        if(requestStatus == trackingStatus[i][j]){
                            statusFound = true;
                            trackBarIndex = trackingStatus[i][0];
                        }
                        j++;
                    }
                    i++;
                }
            }

            // Fill status array corresponding style
            if(trackBarIndex >= 0){
                for(var k = 1; k<trackBarIndex; k++){
                    trackArray[k] = 'visited';
                }
                // Setting active class
                trackArray[trackBarIndex] = 'active';
            }
            else{
                console.log("Could not translate status " + requestStatus);
            }
            return trackBarIndex;
        }

    }
})();