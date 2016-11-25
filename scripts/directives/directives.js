'use strict';
/**
 * Created by Persephone on 2016/11/24.
 */

var directives = angular.module('directives', []);

directives.directive('showTab',
    function () {
        return {
            link: function (scope, element, attrs) {
                element.click(function(e) {
                    e.preventDefault();
                    $(element).tab('show');
                });
            }
        };
    });