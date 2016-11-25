/**
 * Created by Persephone on 2016/11/24.
 */
'use strict';

/**
 * @ngdoc function
 * @name sampleApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the sampleApp
 */
angular.module('sampleApp')
    .controller('IndexCtrl', function ($scope) {
        $scope.email='fang.lu@sjsu.edu';
        $scope.phone='+1(530)601-8719';
    });
