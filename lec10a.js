//.............................BREAK-CONTINUE............................................//

//to print the no.s from 100-200 and stops iteration when divisible by 17

//break stops the execution immediately
for(let i=100;i<=200;i++){
    if(i%17==0)
        break;
 console.log(i);
 
}

//continue skips the current iteration and executes the remaining part of code
for(let i=1;i<=100;i++){
    if(i%17==0)
        continue;
 console.log("The square of "+i+" is = "+i**2);
 
}

//Print all odd numbers that are divisible by 5

for(let i=1;i<200;i++){
    if(i%2==0 || i%5!==0)
              continue;
console.log({i});
}
  


let count=0;
for(let i=1;i<100;i++){
    if(i%2==0 || i%5!==0)
        continue; 
console.log(i);
   count++;
   if(count==10){
    break;
   }
 }
  

   


