//   <section class="container">
//         <h1>Counter</h1>
//         <h2 id="count">0</h2>
//         <p class="message"></p>
//     </section>

//     <section>
//         <button id="increment">+</button>
//         <button id="decrement">-</button>
//     </section>

document.addEventListener("DOMContentLoaded",function(){
    const incrementButton=document.getElementById("increment");
    const decrementButton=document.getElementById("decrement");

    let count=0;

    let counterDisplayElement=document.getElementById("count");
    let messageElement=document.querySelector(".message");

   function updateCount(){
    counterDisplayElement.textContent=count;
   }

   incrementButton.addEventListener("click",function(){
    if(count===0){
        updateMessage();
    }
    count++;
    updateCount();
   })

   function updateMessage(message){
    messageElement.textContent=message;
   }


   decrementButton.addEventListener("click",function(){
    if(count>0){
        count--;
        
    }else{
        updateMessage("Count cannot be less than 0");
    }
     updateCount();
   })
})