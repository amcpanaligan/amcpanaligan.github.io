(function (angular) {
    'use strict';

    var app = angular.module('HKG', ['ngSanitize', 'ui.bootstrap']);

    app.controller('hkgCtrl', [function () {
        var vm = this;
        
        vm.mapFn = function(value) {
            return value.amount;
        };
        
        vm.sumFn = function (a, b) {
            return a + b;
        };

        vm.march17Activities = [
            {
                activity: 'HKG Airport Arrival',
                time: '2130H',
                notes: [
                    'Pick up SIM and Octopus from Hong Kong International Airport Arrivals Area, Terminal 1, <strong>Counter A13</strong>',
                ]
            },
            {
                activity: 'Transfer to Mong Kok',
                time: '2145H'
            },
            {
                activity: 'Accommodation check-in',
                time: '2210H'
            },
            {
                activity: 'Late Dinner',
                time: '2230H'
            }
        ];

        vm.march17Expenses = [
            {
                expense: 'Tourist Octopus (Klook)',
                amount: 627
            },
            {
                expense: '4G SIM Card (Klook)',
                amount: 339
            },
            {
                expense: 'Route A21 Bus',
                amount: 211
            },
            {
                expense: 'Dinner',
                amount: 320
            }
        ];
    }]);

})(angular);