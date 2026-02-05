let container=document.querySelector(".container");
let innerHTML="";

for(let i=1;i<=800;i++){
    let square=document.createElement("section");
    square.classList.add("square");
    square.addEventListener("mouseenter", function (event) {
        setColor(square);
        });
    square.addEventListener("mouseleave", function (event) {
        removeColor(square);
        });
    container.appendChild(square);
}

