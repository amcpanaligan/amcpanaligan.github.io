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
            link: function (scope) {
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

        vm.march18Activities = [
            {
                activity: 'Rise',
                time: '0800H',
                notes: [
                    'Check essentials (e.g. Phone, Money)',
                ]
            },
            {
                activity: 'Breakfast',
                time: '0845H',
                notes: [
                    'Dimdimsum Dimsum Specialty Store. G/F., 112 Tung Choi Street, Mong Kok',
                ]
            },
            {
                activity: 'Depart from Mong Kok to Central via MTR. <strong>Exit A</strong>',
                time: '0915H',
            },
            {
                activity: 'From Central MTR Exit A, proceed to <strong>Exchange Square Bus Terminus</strong>',
                time: '0940H',
                notes: [
                    'When you arrive at the street level, immediately turn right and you will see an escalator on your right going up to a pedestrian footbridge over Connaught Road. Go up, turn left, and cross Connaught Road. The first building on your left hand is Exchange Square, and the bus terminus is located on ground level underneath the Exchange Square building',
                ]
            },
            {
                activity: 'Trip to Repulse Bay',
                time: '1000H',
                notes: [
                    'Get on <strong>Bus 6, 6A, 6X, 66 or 260</strong>'
                ]
            },
            {
                activity: 'Repulse Bay to Stanley Village',
                time: '1145H',
                notes: [
                    'Get on <strong>Bus 6, 6A, 6X, 66 or 260</strong>'
                ]
            },
            {
                activity: 'Stanley Village',
                time: '1215H'
            },
            {
                activity: 'Stanley Village to Central',
                time: '1330H',
                notes: [
                    'Depart Stanley Village to Central. Get on <strong>Bus 6, 6A, 6X, 66 or 260</strong>'
                ]
            }, 
            {
                activity: 'Back to hotel (Central to Mong Kok)',
                time: '1430H'
            },
            {
                activity: 'Rest',
                time: '1500H'
            },
            {
                activity: 'Transfer to Hong Kong Macau Ferry Terminal',
                time: '1600H',
                notes: [
                    'Mong Kok to Central via MTR',
                    'Walk from Central to Sheung Wan Station',
                    'From Sheung Wan, walk to the ferry terminal'
                ]
            },
            {
                activity: 'Depart to Macau (Take 1700H ferry)',
                time: '1630H',
                notes: [
                    'Grab something to eat'
                ]
            },
            {
                activity: 'Open Top Bus Night Tour Macau',
                time: '1900H-2030H',
                notes: [
                    'From Broadway Macau walk to <strong>Rotunda Da Piscina Olimpica</strong>',
                    'Ride <strong>Bus 25x</strong> towards Border Gate. Arrive Flower City',
                    'Walk to Chun Yuet Garden Building',
                    'Ride <strong>Bus AP1</strong> towards Border Gate. Walk to ferry'
                ]
            },
            {
                activity: 'Transfer back to Hong Kong (Take 2200H ferry)',
                time: '2130H'
            }
        ];
        
        vm.march18Expenses = [
            {
                expense: 'Dimdimsum Dimsum Specialty Store',
                amount: 250
            },
            {
                expense: 'Mong Kok to Central via MTR',
                amount: 80
            },
            {
                expense: 'Exchange Square (Central) to Respulse Bay',
                amount: 50
            },
            {
                expense: 'Respulse Bay to Stanley Village via Bus 6, 6A, 6X, 66 or 260',
                amount: 50
            },
            {
                expense: 'Lunch',
                amount: 250
            },
            {
                expense: 'Stanley Village and Market Misc (Pasalubong lul)',
                amount: 1000
            },
            {
                expense: 'Respulse Bay to Exchange Square (Central)',
                amount: 80
            },
            {
                expense: 'Central to Mong Kok via MTR',
                amount: 80
            },
            {
                expense: 'Mong Kok to Central via MTR',
                amount: 80
            },
            {
                expense: 'HKG <> Macau Ferry fee (Klook)',
                amount: 1900
            },
            {
                expense: 'Misc food',
                amount: 300
            },
            {
                expense: 'Macau Misc',
                amount: 300
            },
            {
                expense: 'Open Top Bus Night Tour Macau with Dinner (Klook)',
                amount: 1100
            }
        ]
    }]);

})(angular);