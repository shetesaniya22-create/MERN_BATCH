//Event delegation is a process where a single event listener is added to a parent element
//Instead of adding event listeners to multiple child elements
//The event listener on the parent element can handle events for all its child elements
//This is possible because of event bubbling in the DOM
//When an event occurs on an element it first runs the handlers on it
//Then on its parent element and so on up to the root of the document
//This way we can manage events more efficiently and reduce memory usage

//Advantages of event delegation
//1. Improved performance: Fewer event listeners means less memory consumption and better performance
//2. Dynamic content handling: Works well with dynamically added elements
//3. Simplified code maintenance: Easier to manage a single event listener

//In target we get the actual element on which the event occurred
//In currentTarget we get the element on which the event listener is attached
//We can use Matches when we want to check for a specific selector
//We can use Closest when we want to check for the element or its ancestors for a specific selector

let form = document.getElementById("add-item-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let formData = new FormData(form);
    let newTodo = formData.get("new-todo");
    addNewToDo(newTodo);
    form.reset();
});

function addNewToDo(todoText) {
    let itemList = document.getElementById("item-list");

    let newLi = document.createElement("li");
    newLi.classList.add("item");

    let newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";

    let newLabel = document.createElement("label");
    newLabel.textContent = todoText;

    let newButton = document.createElement("button");
    newButton.textContent = "Delete";

    newLi.append(newCheckbox, newLabel, newButton);
    itemList.appendChild(newLi);
}

document.getElementById("item-list").addEventListener("click", function (event) {
    if (event.target.closest("button")) {
        event.target.closest(".item").remove();
    }
});
