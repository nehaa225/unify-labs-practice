const input = document.querySelector("#todoInput");

const addBtn = document.querySelector("#addBtn");

const list = document.querySelector("#todoList");

const emptyMsg = document.querySelector("#emptyMsg");


// Hide empty message initially

function checkEmpty(){

emptyMsg.style.display = list.children.length === 0 ? "block" : "none";

}


checkEmpty();


// Add task

addBtn.addEventListener("click", ()=>{

if(input.value.trim()==="") return;


// create li

const li = document.createElement("li");


// task text

const span = document.createElement("span");

span.textContent = input.value;


// delete button

const del = document.createElement("span");

del.textContent = "✖";

del.classList.add("delete");


// toggle complete

span.addEventListener("click", ()=>{

li.classList.toggle("completed");

});


// delete task

del.addEventListener("click", ()=>{

li.remove();

checkEmpty();

});


// append

li.appendChild(span);

li.appendChild(del);

list.appendChild(li);


input.value="";

checkEmpty();

});
