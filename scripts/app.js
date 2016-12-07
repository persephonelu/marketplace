'use strict';

/**
 * @ngdoc overview
 * @name sampleApp
 * @description
 * # sampleApp
 *
 * Main module of the application.
 */
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
    'angular-md5'
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

      .when('/login', {
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
      })


      .otherwise({
        redirectTo: '/'
      });


  });
