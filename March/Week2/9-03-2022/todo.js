const todos = [];

const render = function() {
    const parent_container = document.getElementById('span_container');
    parent_container.innerHTML = "";


    for(let i = 0;i < todos.length; i++){
        const new_span = document.createElement('span');        
        new_span.innerText = todos[i];
        parent_container.appendChild(new_span);
    }
}

const add_item = function() {
    const ip = document.getElementById('todo_input');
    const new_todo = ip.value;
    todos.push(new_todo);
    ip.value = " ";
    render();
}

const btn = document.getElementById('add_btn');
btn.addEventListener('click' , add_item);