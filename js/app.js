// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck)

//Functions

function addTodo(event) {
    //Prevents form from submitting
    event.preventDefault();
    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Done button
    const doneButton = document.createElement('button');
    doneButton.innerHTML = '<i class="fas fa-check"></i>';
    doneButton.classList.add("done-btn");
    todoDiv.appendChild(doneButton);
    //Delete button
    const deleteButton = document.createElement('button');     
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);
    //Append to list
    todoList.appendChild(todoDiv);
    //Clear input value
    todoInput.value = "";
}

function deleteCheck(event) {
    const item = event.target;
    // Delete item
    if (item.classList[0] === 'delete-btn') {
    const todo = item.parentElement;
    todo.remove();
    }   
    
    if (item.classList[0] === "done-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}


