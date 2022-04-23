let addToDoButton = document.getElementById("addToDo");

//created an unordered list for the todos in index.html instead of a paragraph element
let todoList = document.getElementById("todo--list")
//let toDoContainer = document.getElementById("toDoContainer");

let inputField = document.getElementById("inputField");



//function to remove from the todo list
function removeTodo() {
    this.parentElement.remove();
}

addToDoButton.addEventListener("click", function(){

    //create li tag
    let li = document.createElement("li")
    li.innerText = inputField.value;
    //append li tag to ul#todoList 
    todoList.appendChild(li);
    //clear the input field
    inputField.value = "";



    //create a button element
    let deleteButton = document.createElement("button");
    //create textnode for delete btn
    deleteButton.appendChild(document.createTextNode("DELETE"))
    //append the button to the li tag
    li.appendChild(deleteButton)
    //add delete functionality to the button
    deleteButton.addEventListener("click", removeTodo);
})