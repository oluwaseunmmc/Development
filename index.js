"use strict";
// select everything
// select the todo-form
const todoForm = document.querySelector('.todo-form');
// selct the input box
const todoInput = document.querySelector('todo-input');
// select the <ul> with class "todo-items"
const todoItems = document.querySelector('todo-items');
// array which stores every todos
let todos = [];
// add an eventListener on form, and listen for submit event
todoForm.addEventListener('submit', function (event) {
    // prevent the page from reloading when submitting the form
    event.preventDefault();
    addTodo(todoInput.value); // call addTodo function with input box current value
});
function addTodo(item) {
    // if item is not empty
    if (item !== '') {
        // make a todo object, which has id, name, and completed properties
        const todo = {
            id: Date.now(),
            name: item,
            completed: false
        };
        // then add it to todos array
    }
}
