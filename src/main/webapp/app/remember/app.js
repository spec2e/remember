/*jslint browser : true, continue : true,
 devel : true, indent : 2, maxerr : 50,
 newcap : true, nomen : true, plusplus : true,
 regexp : true, sloppy : true, vars : false,
 white : false
 */
/*global namespace, log, window, angular, kata */

namespace('remember');

var rememberModule = angular.module('Remember', ['ngResource']);

rememberModule.factory('httpInterceptor', function ($q, $rootScope) {

    return {

        // optional method
        'request':function (config) {
            $rootScope.showOverlay = true;
            return config || $q.when(config);
        },

        // optional method
        'requestError':function (rejection) {
            $rootScope.showOverlay = false;
            return $q.reject(rejection);
        },


        // optional method
        'response':function (response) {
            $rootScope.showOverlay = false;
            return response || $q.when(response);
        },

        // optional method
        'responseError':function (rejection) {
            $rootScope.showOverlay = false;
            return $q.reject(rejection);
        }
    };
});

rememberModule.config(['$httpProvider',
    function ($httpProvider) {
        $httpProvider.interceptors.push('httpInterceptor');
    }
]);


rememberModule.run(function($rootScope) {

    $rootScope.showOverlay = false;
});





