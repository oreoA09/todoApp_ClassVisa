let addToDoButton = document.getElementById("addToDo");

//created an unordered list for the todos in index.html instead of a paragraph element
let todoList = document.getElementById("todo--list")
//let toDoContainer = document.getElementById("toDoContainer");

let inputField = document.getElementById("inputField");

//function to strick todo in list
function strickTodo() {
    this.parentElement.style.textDecoration = "line-through";
    this.parentElement.style.color = "gray";
    this.parentElement.style.background = rgba(252,70,107,0.5);
}

//function to remove from the todo list
function removeTodo() {
    this.parentElement.remove();
}

addToDoButton.addEventListener("click", function(){
    if(inputField.value !== ""){
    //create li tag
    let li = document.createElement("li")
    li.innerText = inputField.value;
    //append li tag to ul#todoList 
    todoList.appendChild(li);
    //clear the input field
    inputField.value = "";


    //create a check button element
    let checkButton = document.createElement("button");
    //create textnode for check btn
    checkButton.appendChild(document.createTextNode("✔"))
    //append the button to the li tag
    li.appendChild(checkButton)
    //add delete functionality to the button
    checkButton.addEventListener("click", strickTodo);


    //create a button element
    let deleteButton = document.createElement("button");
    //create textnode for delete btn
    deleteButton.appendChild(document.createTextNode("X"))
    //append the button to the li tag
    li.appendChild(deleteButton)
    //add delete functionality to the button
    deleteButton.addEventListener("click", removeTodo);
}
else{
    alert("You have to write something!!");
}

})