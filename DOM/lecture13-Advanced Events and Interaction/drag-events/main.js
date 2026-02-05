document.addEventListener("DOMContentLoaded", () => {

    const target = document.querySelector("#target");
    const draggableElements = document.querySelectorAll("[draggable='true']");

    draggableElements.forEach(element => {
        element.addEventListener("dragstart", e => {
            e.dataTransfer.setData("text/plain", e.target.id);
        });
    });

    
    target.addEventListener("dragenter", e => {
        e.preventDefault();
        target.style.backgroundColor = "red";
    });

  
    target.addEventListener("dragover", e => {
        e.preventDefault(); 
        target.style.backgroundColor = "red";
    });

   
    target.addEventListener("dragleave", e => {
        
        if (!target.contains(e.relatedTarget)) {
            target.style.backgroundColor = "";
        }
    });

   
    target.addEventListener("drop", e => {
        e.preventDefault();
        target.style.backgroundColor = "";

        const elementId = e.dataTransfer.getData("text/plain");
        const draggedElement = document.getElementById(elementId);

        target.appendChild(draggedElement);
    });



    let fileInput = document.querySelector("#file-input");

fileInput.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.target.style.border = "2px dashed red";
    console.log("File is over the input");
});

fileInput.addEventListener("dragleave", (e) => {
    e.target.style.border = "none";
});

fileInput.addEventListener("drop", (e) => {
    e.preventDefault();
    e.target.style.border = "none";


    fileInput.files = e.dataTransfer.files;
});


});
