'use strict';

/**
 * @ngdoc function
 * @name sampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sampleApp
 */
angular.module('sampleApp')
  .controller('MainCtrl', function ($scope, $http, $location, currProduct, visited, gamearts, codejob, ourpets, iph) {
      $scope.category=1;
      $scope.products = gamearts.get_gamearts_products().query();
      $scope.Top5Games = gamearts.get_gamearts_top5_products().query();
      $scope.Top5Pets= ourpets.get_ourpets_top5_products().query();
      $scope.Top5Jobs= codejob.get_codejob_top5_products().query();
      $scope.Top5Iph= iph.get_iph_top5_products().query();

      $scope.get_gamearts_products = function() {
          $scope.category = 1;
          //console.log($scope.category);
          $scope.products = gamearts.get_gamearts_products().query();
      };

      $scope.get_gamearts_products_by_id = function() {
          $scope.products = {};
          var id = 1;
          $scope.products = gamearts.get_gamearts_products_by_ID(id).query();
      };

      //start pets



      $scope.get_ourpets_products = function() {
          $scope.category = 2;
          //console.log($scope.category);
          $scope.products =ourpets.get_ourpets_products().query();
      };

      $scope.get_ourpets_products_by_id = function() {
          $scope.products = {};
          var id = 1;
          $scope.products = ourpets.get_ourpets_products_by_ID(id).query();
      };
      //end pets


      //add codejob

      $scope.get_codejob_products = function() {
          $scope.category = 3;
          //console.log($scope.category);
          $scope.products = codejob.get_codejob_products().query();
      };

      $scope.get_codejob_products_by_id = function() {
          $scope.products = {};
          var id = 1;
          $scope.products = codejob.get_codejob_products_by_ID(id).query();
      };
      //end of codejob



      //start iph

      $scope.get_iph_products = function() {
          $scope.category = 4;
          $scope.products =iph.get_iph_products().query();
      };

      $scope.get_iph_products_by_id = function() {
          $scope.products = {};
          var id = 1;
          $scope.products = iph.get_iph_products_by_ID(id).query();
      };
      //end iph

      $scope.setCategoryto1 = function() {
          $scope.category = 1;
      };

      $scope.setCategoryto2 = function() {
          $scope.category = 2;
      };

      $scope.setCategoryto3 = function() {
          $scope.category = 3;
      };

      $scope.setCategoryto4 = function() {
          $scope.category = 4;
      };


      $scope.showProductDetail = function (productId) {
          // if ($scope.category === 1)
          // {
          //     currProduct.currProduct = gamearts.get_gamearts_products_by_ID(productId).query();
          // }
          // else if ($scope.category === 2)
          // {
          //     currProduct.currProduct = ourpets.get_ourpets_products_by_ID(productId).query();
          // }
          // else if ($scope.category === 3)
          // {
          //     currProduct.currProduct = codejob.get_codejob_products_by_ID(productId).query();
          // }
          // else if ($scope.category === 4)
          // {
          //     currProduct.currProduct = iph.get_iph_products_by_ID(productId-1).query();
          // }


          currProduct.currProduct = $scope.products[productId - 1];
          $scope.product = currProduct.currProduct;
          console.log($scope.product);

          visited.addVisited($scope.product); //update recently visited

          // $scope.visited = function () {
          //     visited.addVisited($scope.product);
          // }

          // update click count
          if ($scope.category === 1)
          {
              gamearts.update_gamearts_product_clickcount(productId).query();
          }
          else if ($scope.category === 2)
          {
              ourpets.update_ourpets_product_clickcount(productId).query();
          }
          else if ($scope.category === 3)
          {
              codejob.update_codejob_product_clickcount(productId).query();
          }
          else if ($scope.category === 4)
          {
              iph.update_iph_product_clickcount(productId).query();
          }
          //alert(currProduct.currProduct.productName);

          $location.path("/product/"+ $scope.category);
      };

      $scope.productVisited = visited.getVisited();
      console.log($scope.productVisited);

      $scope.totalProducts = [];

      $scope.Top5Games = gamearts.get_gamearts_top5_products().query(function(data) {
          for(var i = 0; i < 5; i++)
          {

              $scope.totalProducts.push(data[i]);
          }
      });
      $scope.Top5Pets = ourpets.get_ourpets_top5_products().query(function(data) {
          for(var i = 0; i < 5; i++)
          {
              $scope.totalProducts.push(data[i]);
          }
      });
      $scope.Top5Jobs = codejob.get_codejob_top5_products().query(function(data) {
          for(var i = 0; i < 5; i++)
          {
              $scope.totalProducts.push(data[i]);
          }
      });
      $scope.Top5Iphs = iph.get_iph_top5_products().query(function(data) {
          for(var i = 0; i < 5; i++)
          {
              $scope.totalProducts.push(data[i]);
          }
      });

      $scope.orderByFunction = function(top5){
          return parseInt(-top5.clickcount);
      };
  }) // end of MainCtrl


  .controller('ProductCtrl', function ($http, $scope, $sce, currProduct, cart, $routeParams, productReviewRating, currRating) {
      $scope.product = currProduct.currProduct;
      $scope.quantity = 1;
      $scope.category = $routeParams.category;
      //$scope.rating = $scope.getProductRating;
      //console.log("rating:"+$scope.rating);


      $scope.description = $sce.trustAsHtml($scope.product.description);
      //console.log("category is " + $scope.category);

      $scope.addProductToCart = function () {
          cart.addToCart({name:$scope.product.productName, quantity:$scope.quantity, price:$scope.product.price, img:$scope.product.productImg});
      };

      $scope.getProductRating = function () {
          var productRating = productReviewRating.getProductRating($scope.category, $scope.product.id).query(function() { //$scope.encryptionMsg
              var pr = productRating[0];
              //console.log("get-return-rating"+pr.avg_rating);
              //console.log(pr.category);
              $scope.rating = pr.avg_rating;
          });
      };

      $scope.getProductReview = function () {
          $scope.productReviews = productReviewRating.getProductReview($scope.category, $scope.product.id).query();//(function() { //$scope.encryptionMsg
          //var prw = productReview;
          //console.log("get-return-rating"+pr.avg_rating);
          //console.log(prw.username);
          //$scope.rating = pr.avg_rating;
          //$scope.username = prw.username;
          //$scope.comments = prw.comments;
      };

      $scope.updateProductRating = function () {
          $scope.productReviews = productReviewRating.updateProductRating($scope.category, $scope.product.id, currRating.getCurrRating()).query();//(function() { //$scope.encryptionMsg
          //var prw = productReview;
          //console.log("get-return-rating"+pr.avg_rating);
          //console.log(prw.username);
          //$scope.rating = pr.avg_rating;
          //$scope.username = prw.username;
          //$scope.comments = prw.comments;
      };

      //$scope.postProductReview = function () {
          //$scope.addReview = {};
          // productReviewRating.postProductReview($scope.addReviewUsername, $scope.category, $scope.product.id,
              //$scope.addReviewEmail, $scope.addReviewComments, $scope.addReviewRating).query();//(function() { //$scope.encryptionMsg
          //productReviewRating.postProductReview($scope.category, $scope.product.id, $scope.addReviewUsername, $scope.addReviewEmail, $scope.addReviewComments, $scope.addReviewRating).query();
          //var prw = productReview;
          //console.log("get-return-rating"+pr.avg_rating);
          //console.log(prw.username);
          //$scope.rating = pr.avg_rating;
          //$scope.username = prw.username;
          //$scope.comments = prw.comments;
      //};


      $scope.submitForm = function() {
          var data = new Object();
          data.username = $scope.addReviewUsername;
          data.email = $scope.addReviewEmail;
          data.category = $scope.category;
          data.product_id = $scope.product.id;
          data.comments = $scope.addReviewComments;
          // data.rating = $scope.addReviewRating;
          data.rating = currRating.getCurrRating();
          var jdata = JSON.stringify(data);
          console.log(jdata);
          // Posting data
          $http({
              method  : 'POST',
              url     : 'http://www.codejob.tech/postProductReview.php?',
              data    : jdata, //forms user object
              headers : {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
          })
              .success(function(data) {
                  if (data.errors) {
                      // Showing errors.
                      $scope.errorName = data.errors.name;
                      $scope.errorUserName = data.errors.username;
                      $scope.errorEmail = data.errors.email;
                  } else {
                      $scope.message = data.message;
                  }
              });
      };


  })


  .controller('CartCtrl', function ($scope, cart) {
      $scope.productCart = cart.getCart();
  })

  .controller('LoginCtrl', function ($scope, currUser, $location, md5, userAuth, showindexusername) {

      $scope.checkbox = true;

      $scope.login = function () {
          if ($scope.presentusername === undefined)
          {
              $scope.information = 'Username can not be null';
              return;
          }

          if ($scope.presentpassword === undefined)
          {

              $scope.information = 'Password can not be null';
              return;
          }
          $scope.encryptionMsg = md5.createHash($scope.presentpassword);

          var loginSuccess = userAuth.login($scope.presentusername, $scope.encryptionMsg).query(function() { //$scope.encryptionMsg
              var ls = loginSuccess[0];
              //console.log(ls);
              if (ls.result === 1) {
                  currUser.currUser = $scope.presentusername;
                  showindexusername.setIndexUsername($scope.presentusername);
                  console.log("lgs"+showindexusername.getIndexUsername().n);
                  $location.path("/");
                  return;
              }
              else {
                  $scope.information ='Login fail';
              }
          });


          console.log('encryption password is ' + $scope.encryptionMsg);
      };

      $scope.registerNewUser = function () {
          if ($scope.newusername === undefined)
          {
              $scope.registerinfomation = 'Username can not be null';
              return;
          }

          if ($scope.newpassword === undefined)
          {
              $scope.registerinfomation = 'Password can not be null';
              return;
          }
          $scope.encryptionMsg = md5.createHash($scope.newpassword);

          var registerSuccess = userAuth.registerNewUser($scope.newusername, $scope.encryptionMsg).query(function() {
              var rs = registerSuccess[0];
              if (rs.result === 1) {
                  $scope.registerinfomation = 'Register success';
              }
              else {
                  $scope.registerinfomation = 'Register fail, you may use the same username';
              }
          });
          console.log('encryption password is ' + $scope.encryptionMsg);
      };
  })


    .controller('fbLoginCtrl', function($scope, ezfb, $window, $location, showindexusername) {

        updateLoginStatus(updateApiMe);

        $scope.login = function () {
            /**
             * Calling FB.login with required permissions specified
             * https://developers.facebook.com/docs/reference/javascript/FB.login/v2.0
             */
            ezfb.login(function (res) {
                /**
                 * no manual $scope.$apply, I got that handled
                 */
                if (res.authResponse) {
                    updateLoginStatus(updateApiMe);
                    showindexusername.setIndexUsername(res["name"]);
                }
            }, {scope: 'email,user_likes'});
        };

        $scope.logout = function () {
            /**
             * Calling FB.logout
             * https://developers.facebook.com/docs/reference/javascript/FB.logout
             */
            ezfb.logout(function () {
                updateLoginStatus(updateApiMe);
            });
        };

        $scope.share = function () {
            ezfb.ui(
                {
                    method: 'feed',
                    name: 'angular-easyfb API demo',
                    picture: 'http://plnkr.co/img/plunker.png',
                    link: 'http://plnkr.co/edit/qclqht?p=preview',
                    description: 'angular-easyfb is an AngularJS module wrapping Facebook SDK.' +
                    ' Facebook integration in AngularJS made easy!' +
                    ' Please try it and feel free to give feedbacks.'
                },
                function (res) {
                    // res: FB.ui response
                }
            );
        };

        /**
         * For generating better looking JSON results
         */
        var autoToJSON = ['loginStatus', 'apiMe'];

        angular.forEach(autoToJSON, function (varName) {
            $scope.$watch(varName, function (val) {
                $scope[varName + 'JSON'] = JSON.stringify(val, null, 2);
            }, true);
        });

        /**
         * Update loginStatus result
         */
        function updateLoginStatus (more) {
            ezfb.getLoginStatus(function (res) {
                $scope.loginStatus = res;

                (more || angular.noop)();
            });
        }

        /**
         * Update api('/me') result
         */
        function updateApiMe () {
            ezfb.api('/me', function (res) {
                $scope.apiMe = res;
                $scope.fbName = $scope.apiMe["name"];
            });
        }
    })


    .controller('StarCtrl', function ($scope, currRating) { //Star
        $scope.maxRating = 5;
        $scope.ratedBy = 1;
        $scope.rateBy = function (star) {
            $scope.ratedBy = star;
            // currRating.currRating = $scope.ratedBy;
            currRating.setCurrRating($scope.ratedBy);
            // console.log
            // $scope.addReviewRating = currRating.currRating;
        };

        // $scope.addReviewRating = 1;
        // $scope.rateBy = function (star) {
        //     $scope.addReviewRating = star;
        //     // $scope.addReviewRating = $scope.ratedBy;
        // };


    })
