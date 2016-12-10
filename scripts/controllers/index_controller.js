'use strict';

/**
 * @ngdoc function
 * @name sampleApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the sampleApp
 */
angular.module('sampleApp')
    .controller('IndexCtrl', function ($scope, showindexusername) {
        $scope.email='fang.lu@sjsu.edu';
        $scope.phone='+1(530)601-8719';
        $scope.indexusername = showindexusername.getIndexUsername();
        console.log($scope.indexusername.n);
    });
