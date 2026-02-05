//By default js has single threaded 
//Task queue---> setTime() functions
//Microtask queue----> Promises
//call stack----->Normal functions



document.addEventListener("DOMContentLoaded",()=>{

    console.log("Processing..........");
    
    const status=document.getElementById("status");
    status.textContent="Processing.......";


   const start=Date.now();

   while(Date.now() - start < 4000){ }
   
    document.getElementById("btn").addEventListener("click",function(){
         console.log("Button clicked");
    });
    console.log("Done");
    status.textContent="Done";
    






    setTimeout(()=>{
        console.log("Inside the settime out");
        
    },2000);

    setInterval(()=>{
         console.log("Code inside interval");
         
    },60000);

    console.log("Next line is executed");
    
    
    
})
