// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
//Event listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck)
// Functions
// Add items functionality
function addTodo(event) {
    // Prevents form from submitting
    event.preventDefault();
    // Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Add todo to local storage
    saveLocalTodos(todoInput.value);
    // Done button
    const doneButton = document.createElement('button');
    doneButton.innerHTML = '<i class="fas fa-check"></i>';
    doneButton.classList.add("done-btn");
    todoDiv.appendChild(doneButton);
    // Delete button
    const deleteButton = document.createElement('button');     
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);
    // Append to list
    todoList.appendChild(todoDiv);
    // Clear input value
    todoInput.value = "";
}
// Delete button functionality 
function deleteCheck(e) {
    const item = e.target;
    // Delete item
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        // Animation
        todo.classList.add("fall");
        removeLocalTodos(todo);
        todo.addEventListener("transitionend", function(){
            todo.remove();
         });
    }   
    
    if (item.classList[0] === "done-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
        }
}
// Save items to local storage
function saveLocalTodos(todo) {
    // Check for items already in local storage
    let todos;
    if(localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}
// Removes items from local storage
function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
//Puts itesm saved to local storage back into DOM list items
function getTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo) {
      //Create todo div
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todo");
      //Create list
      const newTodo = document.createElement("li");
      newTodo.innerText = todo;
      newTodo.classList.add("todo-item");
      todoDiv.appendChild(newTodo);
      todoInput.value = "";
      //Create Completed Button
      const completedButton = document.createElement("button");
      completedButton.innerHTML = `<i class="fas fa-check"></i>`;
      completedButton.classList.add("done-btn");
      todoDiv.appendChild(completedButton);
      //Create trash button
      const trashButton = document.createElement("button");
      trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
      trashButton.classList.add("delete-btn");
      todoDiv.appendChild(trashButton);
      //attach final Todo
      todoList.appendChild(todoDiv);
    });
  }