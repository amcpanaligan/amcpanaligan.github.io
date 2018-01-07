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
                activity: 'Transfer to Mong Kok via Airport Express Bus (A21)',
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
                    'Try street foods at <strong>Dundas Street cor. Sai Yeung Choi Street South</strong>'
                ]
            }
        ];

        vm.march17Expenses = [
            {
                expense: 'Tourist Octopus (Klook)',
                amount: 627,
                type: 'Klook',
                subType: 'Transportation'
            },
            {
                expense: '4G SIM Card (Klook)',
                amount: 339,
                type: 'Klook',
                subType: 'Transportation'
            },
            {
                expense: 'Route A21 Bus',
                amount: 211,
                type: 'Transportation',
                subType: 'Bus'
            },
            {
                expense: 'Dinner',
                amount: 320,
                type: 'Food'
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
                activity: 'Trip to Repulse Bay (<strong>Bus 6, 6A, 6X, 66 or 260</strong>)',
                time: '1000H',
                notes: [
                    'Get on <strong>Bus 6, 6A, 6X, 66 or 260</strong>'
                ]
            },
            {
                activity: 'Repulse Bay to Stanley Village (<strong>Bus 6, 6A, 6X, 66 or 260</strong>)',
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
                activity: 'Stanley Village to Central (<strong>Bus 6, 6A, 6X, 66 or 260</strong>)',
                time: '1330H',
                notes: [
                    'Depart Stanley Village to Central. Get on <strong>Bus 6, 6A, 6X, 66 or 260</strong>'
                ]
            }, 
            {
                activity: 'Back to hotel (Central to Mong Kok via MTR)',
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
                amount: 250,
                type: 'Food'
            },
            {
                expense: 'Mong Kok to Central (MTR)',
                amount: 80,
                type: 'Transportation',
                subType: 'MTR'
            },
            {
                expense: 'Exchange Square (Central) to Repulse Bay (Bus)',
                amount: 50,
                type: 'Transportation',
                subType: 'Bus'
            },
            {
                expense: 'Respulse Bay to Stanley Village (Bus)',
                amount: 50,
                type: 'Transportation',
                subType: 'Bus'
            },
            {
                expense: 'Lunch',
                amount: 250,
                type: 'Food'
            },
            {
                expense: 'Stanley Village and Market Misc (Pasalubong lul)',
                amount: 1000,
                type: 'Extra'
            },
            {
                expense: 'Respulse Bay to Exchange Square (Central) (Bus)',
                amount: 80,
                type: 'Transportation',
                subType: 'Bus'
            },
            {
                expense: 'Central to Mong Kok (MTR)',
                amount: 80,
                type: 'Transportation',
                subType: 'MTR'
            },
            {
                expense: 'Mong Kok to Central (MTR)',
                amount: 80,
                type: 'Transportation',
                subType: 'MTR'
            },
            {
                expense: 'HKG <> Macau Ferry fee (Klook)',
                amount: 1900,
                type: 'Klook',
                subType: 'Ferry'
            },
            {
                expense: 'Misc food',
                amount: 300,
                type: 'Food'
            },
            {
                expense: 'Macau Misc',
                amount: 300,
                type: 'Extra'
            },
            {
                expense: 'Open Top Bus Night Tour Macau with Dinner (Klook)',
                amount: 1100,
                type: 'Klook',
                subType: 'Tour'
            }
        ];

        vm.march20Activities = [
            {
                activity: 'Rise',
                time: '0700H',
                notes: [
                    'Check necessities'
                ]
            },
            {
                activity: 'Breakfast',
                time: '0745H',
                notes: [
                    'Restaurant?'
                ]
            },
            {
                activity: 'Mong Kok to Tung Chung (MTR)',
                time: '0830H',
                notes: [
                    'Mong Kok to Lai King',
                    'Interchange at Lai King Platform 3 towards Tung Chung',
                    'Lai King to Tung Chung'
                ]
            },
            {
                activity: 'Ngong Ping 360',
                time: '1000H',
                notes: [
                    'Redeem via Klook'
                ]
            },
            {
                activity: 'Tung Chung to Mong Kok (MTR)',
                time: '1700H',
                notes: [
                    'Tung Chung to Lai King',
                    'Interchange at Lai King Platform 2 towards Central',
                    'Lai King to Mong Kok'
                ]
            },
            {
                activity: 'Rest',
                time: '1800H'
            },
            {
                activity: 'Dinner',
                time: '1900H',
                notes: [
                    'at Mong Kok'
                ]
            },
            {
                activity: 'Mong Kok Streets',
                time: '1930H',
                notes: [
                    'Sneaker Lane at Fa Yuen Street',
                    'Ladies Market at Tung Choi Street'
                ]
            }
        ];

        vm.march20Expenses = [
            {
                expense: 'Breakfast',
                amount: 250,
                type: 'Food'
            },
            {
                expense: 'Mong Kok to Tung Chung (MTR)',
                amount: 115,
                type: 'Transportation',
                subType: 'MTR'
            },
            {
                expense: '360 Lantau Sky-Land-Sea Day Pass (Round Trip) (Klook)',
                amount: 2165,
                type: 'Klook',
                subType: 'Tour'
            },
            {
                expense: 'Lunch',
                amount: 250,
                type: 'Food'
            },
            {
                expense: 'Tung Chung to Mong Kok (MTR)',
                amount: 115,
                type: 'Transportation',
                subType: 'MTR'
            },
        ];
        
    }]);

})(angular);