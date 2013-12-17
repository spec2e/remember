/*jslint browser : true, continue : true,
 devel : true, indent : 4, maxerr : 50,
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

        var scop,
            service;

        beforeEach(inject(function ($controller, $rootScope, RememberListService) {
            scope = $rootScope.$new();
            service = RememberListService;

            $controller('remember.HomeController', {
                $scope: scope,
                RememberListService: service
            });
        }));

        it("should have a service named RememberListService", function () {
            expect(service).not.toBe(null);
        });

        /*
        it('should get a list of ToDos from the service', function () {

            var todos = scope.todoService.todoList;

            expect(todos.length).toBe(3);
        });
        */
    });


});