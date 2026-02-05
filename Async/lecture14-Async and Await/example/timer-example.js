const timerId=setInterval(() => {
       console.log("Inside the setInterval");
       
});

const timeOutId=setTimeout(() =>{
    console.log("Code from timeout");
    
}, 10000);

document.getElementById("stop").addEventListener("click",function(){
    clearInterval(timerId);
    clearTimeout(timeOutId);
})