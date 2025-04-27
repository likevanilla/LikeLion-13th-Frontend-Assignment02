const todos = [];

function addTodo() {
    const input = document.getElementById("todoInput");
    const value = input.value.trim();
    if (value) {
        todos.push(value);
        input.value = "";
        renderTodos();
    }
}

function renderTodos() {
    const list = document.getElementById("todoList");
    list.innerHTML = "";
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        //js 2번 조건
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.textContent = todo;
        li.append(checkbox, checkbox.textContent);
        // li.onclick = () => removeTodo(index);
        list.appendChild(li);
    });
}

function removeTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

//js 1번 조건
function enterKey() {
    if (window.event.keyCode == 13) {
        addTodo();
    }
}