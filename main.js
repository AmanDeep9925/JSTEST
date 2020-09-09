// Accessing the variables

const input = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-todo');
const allTasks = document.getElementById('all-tasks');
const clearCompleted = document.getElementById('clear-complete-tasks');
const taskList = document.getElementById('tasks-list');
const AllTasks = document.getElementById('all');
const Uncompleted = document.getElementById('uncompleted');
const Completed = document.getElementById('completed');
const todoCount = document.getElementById('task-count');

let todos = [
    { id: 1, todo: 'Wake up @ 5 AM', isDone: false },
    { id: 2, todo: 'Do Excerxise', isDone: false },
    { id: 4, todo: 'Meditate', isDone: false },
    { id: 5, todo: 'Have breakfast', isDone: false },
];

let completedTodos = [];
let unCompletedTodos = [];

// RenderDom

function renderDOM(todos) {
    taskList.innerHTML = '';
    let todoLeft = 0;
    todos.forEach((todo) => {
        const todoItem = document.createElement('li');
        todoItem.classList.add('task');

        todo.isDone === true
            ? todoItem.classList.add('done')
            : todoItem.classList.remove('done');
        todo.isDone === false ? todoLeft++ : (todoLeft += 0);

        todoItem.id = todo.id;

        todoItem.innerHTML = `
        <p>
            <i class="far fa-circle"></i>
            ${todo.todo}</p>
            <i class="far fa-times-circle delete fa-2x" ></i>
        `;
        taskList.appendChild(todoItem);
    });

    todoCount.innerText = todoLeft + '  ';
}

function addToDo() {
    const todoId = Math.floor(Math.random() * 100);
    const todoText = input.value;
    const isDone = false;

    if (todoText != '') {
        todos.push({ id: todoId, todo: todoText, isDone: isDone });
        console.log(todos);
    } else {
        alert('Not a valid todo');
    }
    input.value = '';
    renderDOM(todos);
}

function deleteTodo(todoId) {
    todos = todos.filter((todo) => todo.id != todoId);
    renderDOM(todos);
}

function setToDoDone(todoId) {
    const todoIndex = todos.findIndex((todo) => todo.id == todoId);

    todos.forEach((todo) => {
        if (todo.id == todoId) {
            todo.isDone = !todo.isDone;
        }
    });

    renderDOM(todos);
}

// Setting all tasks as done

function completeAllTasks() {
    clearCompleted.classList.toggle('not-selected');
    todos.forEach((todo) => {
        todo.isDone = !todo.isDone;
    });
    renderDOM(todos);
}

// Remove all done

function removeAllDone() {
    todos.forEach((todo) => {
        deleteTodo(todo.id);
    });
    clearCompleted.classList.add('not-selected');
    renderDOM(todos);
}

renderDOM(todos);

// EventListeners

addTodoButton.addEventListener('click', addToDo);

taskList.addEventListener('click', (e) => {
    const targetToDo = e.target;
    if (targetToDo.classList.contains('delete')) {
        const todoToDeleteId = e.target.parentElement.id;
        deleteTodo(todoToDeleteId);
    }

    if (e.target.classList.contains('fa-circle')) {
        const todoToDoneId = e.target.parentElement.parentElement.id;
        setToDoDone(todoToDoneId);
    }
});

allTasks.addEventListener('click', completeAllTasks);

clearCompleted.addEventListener('click', removeAllDone);

AllTasks.addEventListener('click', () => {
    // AllTasks.classList.toggle('selected');
    AllTasks.classList.toggle('not-selected');
    Uncompleted.classList.toggle('not-selected');
    Completed.classList.toggle('not-selected');

    renderDOM(todos);
});

Uncompleted.addEventListener('click', () => {
    AllTasks.classList.toggle('not-selected');
    Uncompleted.classList.toggle('not-selected');
    Completed.classList.toggle('not-selected');

    if (unCompletedTodos.length > 0) {
        renderDOM(unCompletedTodos);
    } else {
        todos.forEach((todo) => {
            if (todo.isDone !== true) {
                unCompletedTodos.push(todo);
            }
        });
        renderDOM(unCompletedTodos);
    }
});

Completed.addEventListener('click', () => {
    AllTasks.classList.add('not-selected');
    Completed.classList.toggle('not-selected');
    Uncompleted.classList.add('not-selected');

    todos.forEach((todo) => {
        if (todo.isDone === true) {
            completedTodos.push(todo);
        }
    });

    renderDOM(completedTodos);
});
