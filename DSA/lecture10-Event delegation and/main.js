document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll("#item-list > .item > button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            console.log("Delete button clicked");
        });
    });
});

let form=document.getElementById("add-item-form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    let formData=new FormData(form);
    let newTodo=formData.get("new-todo");
    addNewToDo(newTodo);
});

function addNewToDo(todoText){
    let itemList=document.getElementById("item-list");

    let newLi=document.createElement("li");
    newLi.classList.add("item");

    let newCheckbox=document.createElement("input");
    newCheckbox.type="checkbox";
    newCheckbox.name="todo";

    let newLabel=document.createElement("label");
    newLabel.textContent=todoText;

    let newButton=document.createElement("button");
    newButton.textContent="Delete";

    newLi.appendChild(newCheckbox);
    newLi.appendChild(newLabel);
    newLi.appendChild(newButton);

    itemList.appendChild(newLi);
}
//to delete the newly added todo item we have to add event listener to the delete button again
let newButton=document.querySelector("#item-list > .item:last-child > button");
newButton.addEventListener("click",function(){
    console.log("Delete button clicked for newly added item");
});