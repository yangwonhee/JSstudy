const toDoForm2 = document.getElementById("todo-form2");
const toDoInput2 = toDoForm2.querySelector("input");
const toDoList2 = document.getElementById("todo-list2");

const TODOS_KEY_WEEK = "todosweek";

let toDosWeek = [];

function saveToDosWeek(){
    localStorage.setItem(TODOS_KEY_WEEK, JSON.stringify(toDosWeek));
}

function deleteToDoWeek(event){
    const li = event.target.parentElement;
    li.remove();
    toDosWeek = toDosWeek.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDosWeek();
}

function paintToDoWeek(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDoWeek);
    li.appendChild(span);
    li.appendChild(button);

    toDoList2.appendChild(li);
}

function handleToDoSubmitWeek(event){
    event.preventDefault();
    const newTodo = toDoInput2.value;
    toDoInput2.value = "";
    const newTodoobj = {
        text: newTodo,
        id: Date.now(),
    };
    toDosWeek.push(newTodoobj);
    paintToDoWeek(newTodoobj);
    saveToDosWeek();
}

toDoForm2.addEventListener("submit", handleToDoSubmitWeek);

const savedToDosWeek = localStorage.getItem(TODOS_KEY_WEEK);

if(savedToDosWeek){
    const parsedToDosWeek = JSON.parse(savedToDosWeek);
    toDosWeek = parsedToDosWeek;
    parsedToDosWeek.forEach(paintToDoWeek);
}

