'use strict';

/**
 * @ngdoc overview
 * @name sampleApp
 * @description
 * # sampleApp
 *
 * Main module of the application.
 */

/*

window.fbAsyncInit = function() {
    FB.init({
        appId      : '732081800281253',
        xfbml      : true,
        version    : 'v2.8'
    });
    FB.AppEvents.logPageView();
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));*/

angular
  .module('sampleApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'marketplace_services',
    'directives',
    'angular-md5',
      'ezfb',
      'angular-input-stars'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index-main.html',
        controller: 'MainCtrl'
      })

      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })

      .when('/contact', {
          templateUrl: 'views/contact-us.html',
          controller: 'ContactCtrl'
      })

        .when('/product/:category', { //route for category
            templateUrl: 'views/product-details.html',
            controller: 'ProductCtrl'
        })

      /*.when('/product', {
          templateUrl: 'views/product-details.html',
          controller: 'ProductCtrl'
      })*/

      .when('/cart', {
          templateUrl: 'views/cart.html',
          controller: 'CartCtrl'
      })
        .when('/fb',{
            templateUrl:'views/fb.html',
            controller:'fbLoginCtrl'
        })

      .when('/login', {
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  })


    .config(function (ezfbProvider) {
        /**
         * Basic setup
         *
         * https://github.com/pc035860/angular-easyfb#configuration
         */
        ezfbProvider.setInitParams({
            appId: '1164390320335366'
        });
    });






