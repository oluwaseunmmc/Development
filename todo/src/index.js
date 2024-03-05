"use strict";
// select everything
// select the todo-form
const todoForm = document.querySelector('.todo-form');
// selct the input box
const todoInput = document.querySelector('.todo-input');
// select the <ul> with class "todo-items"
const todoItems = document.querySelector('.todo-items');
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
        todos.push(todo);
        addToUl(todos); // call a function to add the todo item to the UL
    }
}
// function to add the todo items to the UL
function addToUl(todoList) {
    // clear items in the list
    todoItems.innerHTML = '';
    //loop through each todo item in the array
    todoList.forEach(todo => {
        //create a new list item element
        const li = document.createElement('li');
        li.innerText = todo.name;
        // append the new li to the todoItems list
        todoItems.appendChild(li);
    });
    // finally clear the input box value
    todoInput.value = '';
}
// function to render given todos to screen
function renderTodos(todos) {
    // clear everything inside <ul> with class = todo-items
    todoItems.innerHTML = '';
    // run through each item inside todos
    todos.forEach(todo => {
        //create a new list item element
        const li = document.createElement('li');
        //create a checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.setAttribute('data-id', todo.id.toString());
        console.log(checkbox);
        // set the text content of the list item
        li.innerText = todo.name;
        // append the checkbox and the new list item to the todoItems List
        todoItems.appendChild(li);
        li.appendChild(checkbox);
    });
}
renderTodos(todos);
// if item is completed, then add a class to <li> called 'checked', which will add line-through style
