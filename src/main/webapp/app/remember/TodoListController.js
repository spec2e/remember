/*jslint browser : true, continue : true,
 devel : true, indent : 2, maxerr : 50,
 newcap : true, nomen : true, plusplus : true,
 regexp : true, sloppy : true, vars : false,
 white : false
 */
/*global namespace, log, window, angular, kata */

namespace('kata.home');

kata.home.TodoListController = function ($scope, TodoService) {

    $scope.todos = TodoService.query();

    //Reset all the todos, setting the 'done' property to 'false'
    var resetTodos = function() {
        $scope.todos.forEach(function(todo) {
            todo.done = false;
        });
    };

    $scope.selectTodo = function(todo) {
        //Reset the all the todo.done values everytime we click the checkbox
        resetTodos();
        todo.done = true;
        $scope.model.selectedTodoSubject = todo.subject;

    };

};

