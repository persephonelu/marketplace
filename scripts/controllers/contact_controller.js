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
    .controller('IndexCtrl', function ($scope, showindexusername) {
         $scope.email='fang.lu@sjsu.edu';
         $scope.phone='+1(530)601-8719';
        //  $scope.showusername = function() {
        //      $scope.indexusername = showindexusername.getIndexUsername();
        //      console.log($scope.indexusername.n);
        //     // console.log($scope.userName);
        // };
        $scope.indexusername = showindexusername.getIndexUsername();

    });
