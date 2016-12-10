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
                return $resource(codejob_url + 'getCodeJobTopProducts.php');
            },
            update_codejob_product_clickcount:function(id) {
                return $resource(codejob_url + 'updateProductClickcount.php?id=' + id.toString());//query
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
            update_ourpets_product_clickcount:function(id) {
                return $resource(ourpets_url + 'updateProductClickcount.php?id=' + id.toString());//query
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
            update_iph_product_clickcount:function(id) {
                return $resource(iph_url + 'updateProductClickcount.php?id=' + id.toString());
            }
        };
    })


    .factory('currProduct', function() {
        var currProduct = {};
        return currProduct;
    })

    .factory('currUser', function() {
        var currUser = {};
        return currUser;
    })


    .factory('currRating', function() {
        var currRating = {};
        return {
            setCurrRating:function(rating) {
                currRating = rating;
            },
            getCurrRating:function() {
                return currRating;
            }
        };
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

    .factory('visited', function () {
        var visited= [];
        return {
            addVisited:function(product) {
                visited.unshift(product);
            },
            getVisited: function() {
                 return visited;
            }
        };
    })



    .factory('showindexusername', function () {
        var indexusername = {};
        return {
            setIndexUsername:function(name) {
                indexusername.n = name;
            },
            getIndexUsername:function() {
                return indexusername;
            }
        };
    })



    .factory('userAuth', function($resource) {
        return {
            registerNewUser: function (newusername, newpassword) { //user sign-up
                return $resource(codejob_url + 'registerNewUser.php?usr=' +
                    newusername.toString() + '&&pw=' + newpassword.toString(), null, {'query': {method: 'GET', isArray: true}});//query
            },
            login: function (presentusername, presentpassword) { //user login
                return $resource(codejob_url + 'userLogin.php?usr=' +
                    presentusername.toString() + '&&pw=' + presentpassword.toString(), null, {'query': {method: 'GET', isArray: true}});//query
            }

        };
    })

    .factory('productReviewRating', function($resource) {
        return {
            getProductRating: function (category, id) {
                return $resource(codejob_url + 'getProductRating.php?category=' +
                    category.toString() + '&&productId=' + id.toString(), null, {
                    'query': {
                        method: 'GET',
                        isArray: true
                    }
                });
            },

            getProductReview: function (category, id) {
                return $resource(codejob_url + 'getProductReview.php?category=' +
                    category.toString() + '&&productId=' + id.toString(), null, {
                    'query': {
                        method: 'GET',
                        isArray: true
                    }
                });

            },

            updateProductRating: function (category, id, rating) {
                return $resource(codejob_url + 'updateProductRating.php?category=' +
                    category.toString() + '&&productId=' + id.toString() + '&&rating=' + rating.toString(), null, {
                    'query': {
                        method: 'GET',
                        isArray: true
                    }
                });

            }

            /*
            postProductReview: function (category, id, addReviewUsername, addReviewEmail, addReviewComments, addReviewRating) { //username, category, id, email, comments, rating
                var data = new Object();
                data.username = addReviewUsername;
                data.email = addReviewEmail;
                data.catagory = category;
                data.product_id = id;
                data.comments = addReviewComments;
                data.rating = addReviewRating;
                var jdata = JSON.stringify(data);
                //console.log(jdata);
            //
                return $resource(
                    codejob_url + 'postProductReview.php?', //url
                    //{"username":"drjkuo", "category":"2", "product_id":"2", "comments":"soso", "rating":"3"}, //data
                    //{"username":addReviewUsername, "category":category, "product_id":id, "comments":addReviewComments, "rating":addReviewRating},
                    {jdata},
                    {
                        create: { //create
                            headers : {'Content-Type': 'application/json'},
                            method: "POST"
                            //isArray: true
                        }

                    }

                );


            } */
        };
    });

