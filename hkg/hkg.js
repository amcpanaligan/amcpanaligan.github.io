(function (angular) {
    'use strict';

    var app = angular.module('HKG', ['ngSanitize', 'ui.bootstrap']);
    
    app.directive('itinerary', [function () {
        return {
            restrict: 'E',
            scope: {
                activities: '=',
                expenses: '='
            },
            templateUrl: 'templates/itinerary-tpl.html',
            link: function(scope) {
                scope.mapFn = function (value) {
                    return value.amount;
                };
                
                scope.sumFn = function (a, b) {
                    return a + b;
                };
            }
        }
    }]);

    app.controller('hkgCtrl', [function () {
        var vm = this;

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
                time: '2145H',
                notes: [
                    'Ride <strong>Route A21</strong> bus',
                    'Get off <strong>8th stop, Sino Centre, Nathan Road</strong>'
                ]
            },
            {
                activity: 'Accommodation check-in',
                time: '2210H',
                notes: [
                    'Contact Airbnb host, <strong>John (+852 9836 4332)</strong>',
                    'Look for <strong>Sun Hing Building, 26F</strong>'
                ]
            },
            {
                activity: 'Late Dinner',
                time: '2230H',
                notes: [
                    'Grab some Street Food at <strong>Dundas Street cor. Sai Yeung Choi Street South</strong>'
                ]
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