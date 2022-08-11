const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

// localStorage(로컬저장소) 데이터 string형태로 저장하기
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
   const li = event.target.parentElement;
   li.remove();
   toDos = toDos.filter((mymind) => mymind.id !== parseInt(li.id));
   saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.type = "button";
  button.innerText = "❌";
  button.addEventListener("click",deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
event.preventDefault();
const newTodo = toDoInput.value;
const newTodoObj = {
    text:newTodo,
    id: Date.now(),
};
toDoInput.value = "";
//배열에 데이터 넣어주기
toDos.push(newTodoObj);
//paintToDo 함수 HTML 형태로 그려주기
paintToDo(newTodoObj);
saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//localStorage 데이터 불러오기
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    //localStorage 데이터 배열 형태로 받아오기
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}




// 화살표 function과 같음
// function sayHello(item){
//     console.log("this is the turn of ", item);
// }