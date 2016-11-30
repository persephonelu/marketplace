'use strict';

/**
 * @ngdoc function
 * @name sampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sampleApp
 */
angular.module('sampleApp')
  .controller('MainCtrl', function ($scope, $http, $location, gamearts, currProduct) {
      $scope.testName='Fang Lu';
      $scope.products = gamearts.get_gamearts_products().query();

      $scope.get_gamearts_products = function() {
          $scope.products = gamearts.get_gamearts_products().query();
      };

      $scope.get_gamearts_products_by_id = function() {
          $scope.products = {};
          var id = 1;
          $scope.products = gamearts.get_gamearts_products_by_ID(id).query();
      };

      $scope.showProductDetail = function (productId) {
          currProduct.currProduct = $scope.products[productId - 1];
          //alert(currProduct.currProduct.productName);
          $location.path("/product");
      };
  })

  .controller('ProductCtrl', function ($scope, $sce, currProduct, cart) {
      $scope.product = currProduct.currProduct;
      $scope.quantity = 1;

      $scope.description = $sce.trustAsHtml($scope.product.description);

      $scope.addProductToCart = function () {
          cart.addToCart({name:$scope.product.productName, quantity:$scope.quantity, price:$scope.product.price, img:$scope.product.productImg});
      };
  })

  .controller('CartCtrl', function ($scope, cart) {
      $scope.productCart = cart.getCart();
  });
