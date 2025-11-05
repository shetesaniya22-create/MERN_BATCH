// ..................LOOPS.........................//

/* Issue in Repeating the code 
-too much work for developer
-chances of error
-unable to count the number of repetition
-too much work to update "Hi" to "Hii"
*/

console.log("Hii!!");
console.log("Hii!!");
console.log("Hii!!");
console.log("Hii!!");
console.log("Hii!!");
console.log("Hii!!");
console.log("Hii!!");
console.log("Hii!!");
console.log("Hii!!");
console.log("Hii!!");
console.log("Hii!!");
console.log("Hii!!");
console.log("Hii!!");
console.log("Hii!!");
console.log("Hii!!");
console.log("Hii!!");
console.log("Hii!!");


//To print the numbers from 1-10
let n=1;
while(n<=10){
    console.log(n);
    n++;
    
}

//Print all even numbers till 25
let number=1;
while(number<25){
    if(number%2==0)
     console.log(number); 
  number+=1;
    
}
//O(25)



//Print countdown from 10-1
let n1=10;
while(n1>0){
   console.log(n1);
   n1--;

}
//O(N1)----->TIME COMPLEXITY

 let a=48;
let b=18;
while(b!==0){
    let temp=b;
    b=a%b;
    a=temp;
}
console.log(a);






//.............................DO_WHILE LOOP.............................//
//first executes the do block at least once then checks condition in WHILE
// If the WHILE condition is true then it will again executes DO block

do{
    console.log("Hii, I'm DO-WHILE loop");
    
}while(false);

//const response=prompt("Do you want to continue?");
//console.log(response);

/*let response;
let responseCounter=0;
do{
    const response=prompt("Do you want to continue?"+responseCounter);
     console.log(response);
    responseCounter++;
}while(response=="Yes" || "yes");*/



//...........................SWITCH CASES....................................//

//days of the week
a=4;
switch(a){
    case 1:
    console.log("Monday");
    break;

    case 2:
    console.log("Tuesday");
    break;

    case 3:
    console.log("Wednesday");
    break;

    case 4:
    console.log("Thursday");
    break;

    case 5:
    console.log("Friday");
    break;

    case 6:
    console.log("Saturday");
    break;

    case 7:
    console.log("Sunday");
    break;
    
    default:
    console.log("Invalid day");
    
}


/*........................................SWITCH CASE..........................................*/

//Make a grading system using switch case 
let marks=20;

switch(true){
    case marks>80:
        console.log("A+");
        break;

    case marks<=80 && marks>60 :
        console.log("A");
        break;

    case marks<=60 && marks>40:
        console.log("B");
        break;

    default:console.log("Fail");
    break;
}
