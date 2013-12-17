/*jslint browser : true, continue : true,
 devel : true, indent : 2, maxerr : 50,
 newcap : true, nomen : true, plusplus : true,
 regexp : true, sloppy : true, vars : false,
 white : false
 */
/*global module, inject, describe, it, oef, expect, log */

describe('RememberListService tests', function () {

    beforeEach(function () {
        module('Remember');
    });

    describe('Test that RememberListService returns a list of RememberList resources', function () {

        var scope;
        var rememberListService;

        beforeEach(inject(function ($controller, $rootScope, RememberListService) {
            scope = $rootScope.$new();
            rememberListService = RememberListService;
            $controller('remember.home.HomeController', {
                $scope: scope,
                RememberListService: rememberListService
            });
        }));

        it("should have a service named RememberListService"), function() {
            expect(rememberListService).not.toBe(null);
        };

        /*
        it('should get a list of ToDos from the service', function () {

            var todos = scope.todoService.todoList;

            expect(todos.length).toBe(3);
        });
        */
    });


});