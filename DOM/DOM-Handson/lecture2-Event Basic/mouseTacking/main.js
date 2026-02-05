document.addEventListener("DOMContentLoaded",function(){
    const circle=document.querySelector(".circle");
    document.addEventListener("mousemove",function(event){
        const {clientX,clientY}=event;
        console.log(event);
        

    })
})

//clientX and clientY--->
//1.Relative to the browser viewport
//2.Doesn't include page scroll
//3.Measured from the top-left corner of the visible browser window


//offsetX and offsetY---->
//1.Relative to the target element
//2.Measured from the top-left of the element that was clicked
//3.Changes depending on which element receives the event


//screenX and screenY------>
//1.Relative to the physical screen
//2.Measured from the top-left of the entire monitor
//3.Includes browser UI, OS taskbar


//pageX and pageY----->
//1.Relative to the whole document
//2.It includes page scrolling


// The value of pageX-pageY AND clientX-clientY is same when page is not scrolling