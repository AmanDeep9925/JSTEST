// var input = document.getElementById("todo");
// var list = document.getElementById("list");

// // Adding the todo to list

// input.addEventListener('keypress',(event)=>{
//     if(event.which === 13){
//         let todoText = input.value;
//         input.value="";
//         let li = document.createElement("li");
//         let span = document.createElement("span");
//         let liText = document.createTextNode(`${todoText}`);
//         let circle = document.createElement("i");
//         let remove = document.createElement("i");

//         circle.classList.add('far','fa-circle','mr-10px','check','isCompleted');
//         remove.classList.add('far','fa-times-circle','delete')
//         // Add circle first
//         li.appendChild(circle)

//         // then text
//         span.appendChild(liText);
//         span.classList.add('li-text');

        
//         // add the list

//         li.appendChild(span);

//         //append delete
//         li.appendChild(remove);
//         li.classList.add('list-item');
//         list.appendChild(li);
//     }
// });

// // handling the plus icon

// var addTodo = document.getElementById('addTodo');

// addTodo.addEventListener('click',()=>{
//         let todoText = input.value;
//         input.value="";
//         let li = document.createElement("li");
//         let span = document.createElement("span");
//         let liText = document.createTextNode(`${todoText}`);
//         let circle = document.createElement("i");
//         let remove = document.createElement("i");

//         circle.classList.add('far','fa-circle','mr-10px','check');
//         remove.classList.add('far','fa-times-circle','delete')
//         // Add circle first
//         li.appendChild(circle)

//         // then text
//         span.appendChild(liText);
//         span.classList.add('li-text');

        
//         // add the list

//         li.appendChild(span);

//         //append delete
//         li.appendChild(remove);
//         li.classList.add('list-item');
//         list.appendChild(li);
// });


