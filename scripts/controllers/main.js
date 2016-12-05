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
      $scope.category=1;
      $scope.products = gamearts.get_gamearts_products().query();
      $scope.Top5Games = gamearts.get_gamearts_top5_products().query();

      $scope.get_gamearts_products = function() {
          $scope.category = 1;
          $scope.products = gamearts.get_gamearts_products().query();
      };

      $scope.get_gamearts_products_by_id = function() {
          $scope.products = {};
          var id = 1;
          $scope.products = gamearts.get_gamearts_products_by_ID(id).query();
      };

      $scope.showProductDetail = function (productId) {
          currProduct.currProduct = $scope.products[productId - 1];
          if ($scope.category === 1)
          {
              gamearts.update_gamearts_product_clickcount(productId).query();
          }
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
  })

  .controller('LoginCtrl', function ($scope, md5, userAuth) {
      $scope.checkbox = true;

      $scope.login = function () {
          if ($scope.username === undefined)
          {
              alert('Username can not be null');
              return;
          }

          if ($scope.password === undefined)
          {
              alert('Password can not be null');
              return;
          }
          $scope.encryptionMsg = md5.createHash($scope.password);
          console.log('encryption password is ' + $scope.encryptionMsg);
      };

      $scope.registerNewUser = function () { //user sign-up
          if ($scope.newusername === undefined) {
              alert('Username can not be null');
              return;
          }

          if ($scope.newpassword === undefined) {
              alert('Password can not be null');
              return;
          }
          $scope.encryptionMsg = md5.createHash($scope.newpassword);
          userAuth.registerNewUser($scope.newusername, $scope.encryptionMsg).query();
          console.log('encryption password is ' + $scope.encryptionMsg);
      };
  });
