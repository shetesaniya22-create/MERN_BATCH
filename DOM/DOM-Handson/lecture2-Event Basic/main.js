function handleClick(event){
     console.log(event);
     alert("Button clicked");
     
}

function handleClick2(event){
    console.log("handle click 2 called");
    
}

const buttonElement=document.querySelector("button");

//When the click event is triggered then handleClick function is called immediately
buttonElement.addEventListener("click",handleClick)
buttonElement.addEventListener('click',handleClick2)


//Mouse Events-------------->
// function handleMouseMove(){
//     console.log(event);
//     // alert("Mouse is moving");
//     console.log("Mouse is moving");
    
    
// }

// document.addEventListener("mousemove",handleMouseMove);


//When we pressed key----repeatedly trigger if held it continuosly
document.querySelector("input").addEventListener("keydown", function(event){
     console.log(event.type,event.key);
     
})

//When we release key
document.querySelector("input").addEventListener("keyup", function(event){
     console.log(event.type,event.key);
     
})

//keypress doesnt trgger for the keys alt , shift,enter,backspace it only works of key is any character
document.querySelector("input").addEventListener("keypress", function(event){
     console.log(event.type,event.key);
     
})
