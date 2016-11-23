'use strict';

/**
 * @ngdoc function
 * @name sampleApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the sampleApp
 */
angular.module('sampleApp')
    .controller('IndexCtrl', function ($scope) {
        $scope.email='fang.lu@sjsu.edu';
        $scope.phone='+1(530)601-8719';
    });
