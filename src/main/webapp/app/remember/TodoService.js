/*jslint browser : true, continue : true,
 devel : true, indent : 2, maxerr : 50,
 newcap : true, nomen : true, plusplus : true,
 regexp : true, sloppy : true, vars : false,
 white : false
 */
/*global namespace, log, window, angular, kata, kataModule */


kataModule.factory('TodoService', ['$resource', function ($resource) {
    return $resource('v1/Todo');
}]);
