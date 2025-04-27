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
        li.setAttribute("class", "todoLists");

        //js 2번 조건
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");

        const text = document.createTextNode(todo);
        
        li.append(checkbox, text);
        list.appendChild(li);

        onLongClick(li, 1000, () => {
            removeTodo(index);
        });
    });
}

function removeTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

// 할 일 삭제 기능을 다른 방식으로 구현
// 롱 클릭 이벤트
function onLongClick($target, duration, callback) {
    let timer;
    $target.onmousedown = () => {
        timer = setTimeout(callback, duration);
    };
    $target.onmouseup = () => {
        clearTimeout(timer);
    };
    $target.onmouseleave = () => {
        clearTimeout(timer);
    };
}

//js 1번 조건
function enterKey() {
    if (window.event.keyCode == 13) {
        addTodo();
    }
}



