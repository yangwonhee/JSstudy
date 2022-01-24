const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoobj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoobj);
    paintToDo(newTodoobj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}



/*
function sexyFilter(){

}

[1, 2, 3, 4].filter(sexyFilter);

sexyFilter(1) = 1
sexyFilter(2) = 2

function sexyFilter(){return ture}
console.log([1,2,3,4,5].filter(sexyFilter))
-> [1,2,3,4,5]

function sexyFilter(){return false}
console.log([1,2,3,4,5].filter(sexyFilter))
-> []

function sexyFilter(item){return item!=3}
console.log([1,2,3,4,5].filter(sexyFilter))
-> [1,2,4,5]

*/