//Keyboard related events
//Mouse Events
//Diffrence between---> ClientX ClientY----PageX PageY

// PageX PageY--->
//In case of page it represents where in the page mouse pointer is present 
//It consider the scroll length

//ClientX ClientY--->
//It will tell the where the mouse pointer is present


//Touch events---->In case of mobile device emulation
//touchstart,touchend,touchmove
//It doesnt have great precision







 document.addEventListener("DOMContentLoaded",()=>{

//     const input=document.querySelector("#name");

const box = document.querySelector(".box");

let isDragging = false;
let offsetX = 0; //original position from X axis
let offsetY = 0; //original position from Y axis

box.addEventListener("mousedown", (event) => {
    isDragging = true;
    console.log(event);
    
    offsetX = event.clientX - box.offsetLeft;
    offsetY = event.clientY - box.offsetTop;
});

document.addEventListener("mousemove", (event) => {
    if (isDragging) {
        console.log(box.style.left = event.clientX - offsetX + "px");
        console.log(box.style.top = event.clientY - offsetY + "px");
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});


//     box.addEventListener("mouseout",(event)=>{
//         console.log("Mouse is out of box");
        
//     })

//      box.addEventListener("mouseover",(event)=>{
//         console.log("Mouse is over the box");
        
//     })

//      box.addEventListener("mouseleave",(event)=>{
//         console.log("Mouse is leaving the box");
        
//     })

//     box.addEventListener("mousemove",(event)=>{
//         console.log(event);
        
//     })

//    document.addEventListener("mousedown",(event)=>{
//            console.log("Mouse button is pressed");
           
//    })
//    document.addEventListener("mouseup",(event)=>{
//            console.log("Mouse button is released");
           
//    })





    // input.addEventListener("keydown",(event)=>{
        
    //     console.log("Key pressed down");
    //     if(event.ctrlKey && event.key==="k"){
    //         console.log("Ctrl + K key is pressed");
            
    //     }
        
    // })

    // input.addEventListener("keyup",(event)=>{
    //     console.log("Key pressed up");
        
    // })

    // input.addEventListener("keypress",(event)=>{
    //     console.log("Key is pressed");
        
    // })

})