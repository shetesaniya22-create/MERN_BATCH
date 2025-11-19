//.....................FOR LOOPS...................//

/* 1-Initialise the value of variable (This step execute at only once)
   2-Check if the condition is true   (if false,FOR loops stop immediately)
   3-Execute the lines of code inside the loop
   4-Increment the value
   FLOW---> 2  -> 3 -> 4 -> 2 -> 2 -> 4
*/

//print HII 10 times
for(let i=1;i<11;i++){  /* O(N).....THAT IS-10 */
    console.log("Hii");
    
}

//To print counting from 1-10
for(let i=1;i<11;i++){
    console.log(i);
    
}

//To print the number divisible by 3 from 1-50
for(num=3;num<=48;num+=3){
    
        console.log(num);     
    
}
//O(N/3)


for(num1=3;num1<=48;num1++){
        if(num1%3==0){
           console.log(num1);
        }
}

//print the squares of each number from 20 to 35
let N=35;
let i;
for(i=20;i<=N;i++){
    console.log(i*i);
    
}
//Time complexity =(start+n)-start ----->(20+15)-20=15

//To print the square of numbers from 20-35
let n1=15;
let start=20;
for(let i=start;i<start+n1;i++){
    console.log(i*i);
    
}

//to print the table of any number
let tableOfNum=6;
let n11=10;
for(let i=1;i<=n11;i++){
    console.log(tableOfNum +" * "+i +" = " +tableOfNum*i);
    
}
//Find sum of first 100 numbners
let number=100;
let result=0;
for(let i=1;i<=number;i++){
 result+=i;
}
console.log(result);


//By using formula (n*(n+1))/2
let r;
for(let i=1;i<=number;i++){
 r=(number*(number+1))/2;
}
console.log("Sum of first 100 is: "+r);

/*conditions related extra things*/
//Short circuiting in js
const n12=false && 5;
const n13= n12===false && 34;
const n14=n13 && 67;
const n15=true && n13==34 && 45 && n12==false;
const n16=(n12==false && n13==34) || (n14==false && n15==true);

console.log({n12,n13,n14,n15,n16});1
console.log({n12,n13});

//any non-zero value is to be considered as TRUE 
//Zero is considered as FALSE
if(""*1){
    console.log("Value is non-zero");
}else{
    console.log("Value is zero");
    
}

//Short circuiting for && operator
console.log(false && "Hello");
console.log(0 && 5);
console.log("Hi" && "Hello");

//Short circuiting for || operator
console.log(true || "Hello");
console.log(0 || 5);
console.log("" || "Default");  



//factoral of anu number
let fact=1;
let numbers=5;
for(let i=numbers;i>=1;i--){
    fact =fact*i;
}
console.log({fact});

//WAP to check number is prime or not
let Num=15;
let divisor=0;
for(let i=1;i<=Num;i++){
    if(Num%i ==0 ){
        divisor++;
    }
}
const message=divisor>2?"Not Prime":"Prime";
    console.log(message);


let Nums=17;
let sqrt=Math.sqrt(Nums);
let isPrime=true;
for(let i=2;i<=Math.floor(Nums);i++){
    if(Nums%i===0 ){
        isPrime=false;
        break;
    } 
}
const msg=(isPrime && Nums!==1) ? " is prime number" : " is not a prime number";
console.log(Nums + msg );

