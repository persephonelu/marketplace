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
<<<<<<< HEAD
=======
var ourpets_url='http://ourpets.qianwenxie.com/';
var iph_url='http://yaoxingliu.com/';
>>>>>>> 7f475bc5cd7eaa9b0d5b59f9c87693299f10f6c1

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
    .factory('codejob', function ($resource) { //codejob factory
        return {
            get_codejob_products:function () {
                return $resource(codejob_url + 'getCodeJobProducts.php');
            },

            get_codejob_products_by_ID:function(id){
                return $resource(codejob_url + 'getCodeJobProducts.php?id=' + id.toString());//query
            },

            get_codejob_top5_products:function() {
                return $resource(codejob_url + 'getCodeJobTopProducts.php');
            },
            get_codejob_products_by_Clickcout:function(id) {
                return $resource(codejob_url + 'productRestful.php?id=' + id.toString());//query
            }
        };
    })

    .factory('ourpets', function ($resource) { //ourpets
        return {
            get_ourpets_products:function () {
                return $resource(ourpets_url + 'productRestful.php');
            },

            get_ourpets_products_by_ID:function(id){
                return $resource(ourpets_url + 'productRestful.php?id=' + id.toString());//query
            },
            get_ourpets_top5_products:function() {
                return $resource(ourpets_url + 'petsTop5products.php');
            },
            get_ourpets_products_by_Clickcout:function(id) {
                return $resource(ourpets_url + 'productRestful.php?id=' + id.toString());//query
            }
        };
    })

    .factory('iph', function ($resource) { //iph
        return {
            get_iph_products:function () {
                return $resource(iph_url + 'productRestful.php');
            },

            get_iph_products_by_ID:function(id) {
                return $resource(iph_url + 'productRestful.php?id=' + id.toString());//query
            },
            get_iph_top5_products:function() {
                return $resource(iph_url + "iphTop5product.php");
            },
            get_iph_product_by_Clickcout:function(id) {
                return $resource(iph_url + 'productRestful.php?id=' + id.toString());
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

