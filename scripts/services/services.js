'use strict';

/**
 2  * @ngdoc service
 3  * @name sampleApp.services
 4  * @description
 5  * # services
 6  * Service in the sampleApp.
 7  */

var gamearts_url='http://www.gamearts.me/';
var codejob_url='http://www.codejob.tech/';

angular.module('marketplace_services', [])

    .factory('gamearts', function ($resource) {
        return {
            get_gamearts_products:function () {
                return $resource(gamearts_url + 'getGameartsProducts.php');
            },

            get_gamearts_products_by_ID:function(id){
                return $resource(gamearts_url + 'getGameartsProducts.php?id=' + id.toString());//query
            },

            get_gamearts_top5_products:function() {
                return $resource(gamearts_url + 'getGameartsTop5Products.php');
            },

            update_gamearts_product_clickcount:function(id) {
                //console.log(gamearts_url + 'updateProductClickcount.php?id=' + id.toString());
                return $resource(gamearts_url + 'updateProductClickcount.php?id=' + id.toString());
            }
        };
    })
    .factory('currProduct', function() {
        var currProduct = {};
        return currProduct;
    })

    .factory('cart', function () {
        var cart = [];
        return {
            addToCart:function(product) {
                cart.push(product);
            },
            getCart: function() {
                return cart;
            }
        };
    })


    .factory('userAuth', function($resource) {
        return {
            registerNewUser: function (newusername, newpassword) { //user sign-up
                return $resource(codejob_url + 'registerNewUser.php?usr=' +
                    newusername.toString() + '&&pw=' + newpassword.toString());//query
            }
        };
    });

