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

document.addEventListener("DOMContentLoaded", function () {

    // <ul id="item-list">
    //     <li class="item">
    //         <input type="checkbox" name="todo1" id="todo1" />
    //         <label for="todo1">Todo Item 1</label>
    //         <button>

    document.querySelector("ul#item-list").addEventListener("click", (event) => {
        console.log(event.target);

        if (event.target.closest("button")) {
            event.target.closest(".item").remove();

        } else if (event.target.matches("input[type='checkbox']")) {
            event.target.closest(".item").classList.toggle("completed");

        } else if (event.target.closest("label")) {
            console.log("label clicked");
        }

    })


    const form = document.querySelector("#add-item-form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let formData = new FormData(this);
        let newTodo = formData.get("new-todo");
        addNewTodo(newTodo)
    })

    function addNewTodo(newTodo) {
        const itemList = document.getElementById("item-list");
        const itemListCount = itemList.children.length;
        const item = document.createElement("li");
        item.classList.add("item");

        const input = document.createElement("input");
        input.type = "checkbox";
        input.id = `todo${itemListCount + 1}`;
        input.name = input.id;


        const label = document.createElement("label");
        label.textContent = newTodo;
        label.htmlFor = input.name;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        // deleteButton.addEventListener("click")

        item.append(input, label, deleteButton)
        itemList.append(item);
    }







})