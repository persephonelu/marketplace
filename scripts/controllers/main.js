'use strict';

/**
 * @ngdoc function
 * @name sampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sampleApp
 */
angular.module('sampleApp')
  .controller('MainCtrl', function ($scope, gamearts) {
      $scope.testName='Fang Lu';
      $scope.products = gamearts.get_gamearts_products().query();
  });
