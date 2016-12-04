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
var ourpets_url='http://ourpets.qianwenxie.com/';
var iph_url='http://yaoxingliu.com/';

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
                return $resource(codejob_url + 'getCodejobTop5Products.php');
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

            get_ourpets_products_by_Clickcout:function(id){
                return $resource(ourpets_url + 'productRestful.php?id=' + id.toString());//query
            }
        };
    })

    .factory('iph', function ($resource) { //iph
        return {
            get_iph_products:function () {
                return $resource(iph_url + 'productRestful.php');
            },

            get_iph_products_by_ID:function(id){
                return $resource(iph_url + 'productRestful.php?id=' + id.toString());//query
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
    });