
let todosItems = [];



function addTodo(text) {
    const todo = {
        text,
        checked: false,
        id: Date.now(),
    };

    todosItems.push(todo);

    const list = document.querySelector("#list");

    list.insertAdjacentHTML('beforeend',
        `
    <li class="list-item" data-key="${todo.id}">
            <i class="far fa-circle check mr-10px completed" id=${todo.id}></i>
            <span class="li-text">${todo.text}</span>
            <i class="far fa-times-circle delete"></i>
          </li>
    `)
    
}


var input = document.getElementById("todo");

// Adding the todo to list

input.addEventListener('keypress', (event) => {

    if (event.keyCode === 13) {
        let todoText = input.value.trim();
        addTodo(todoText);
        input.value = "";
    }
});

const list = document.querySelector("#list");

list.addEventListener('click', function (event) {
    if (event.target.classList.contains('completed')) {
        const itemKey = event.target.parentElement.dataset.key;
        toggleDone(itemKey);
    }

    if(event.target.classList.contains('delete')){
        const itemKey = event.target.parentElement.dataset.key;
        deleteTODO(itemKey);
    }

});

function toggleDone(key) {
    const index = todosItems.findIndex(item => item.id === Number(key));
    todosItems[index].checked = !todosItems[index].checked;

    const item = document.getElementById(`${key}`);

    if (todosItems[index].checked) {
        item.classList.add('fas',);
    } else {
        item.classList.remove('fas');
    }
}

function deleteTODO(key){
    todosItems = todosItems.filter(item => item.id !== Number(key));
    const item = document.querySelector(`[data-key='${key}']`);
    item.remove();

}

