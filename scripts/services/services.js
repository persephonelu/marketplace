'use strict';

/**
 2  * @ngdoc service
 3  * @name sampleApp.services
 4  * @description
 5  * # services
 6  * Service in the sampleApp.
 7  */

var gamearts_url='http://www.gamearts.me/';

angular.module('marketplace_services', [])

    .factory('gamearts', function ($resource) {
        return {
            get_gamearts_products:function () {
                return $resource(gamearts_url + 'getGameartsProducts.php');
            }
        };
    });