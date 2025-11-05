/*-------------------------RECURSION----------------------------------*/
/*   
    Function calling itself again and again
*/


//Print numbers from n-1//
console.log("Print Numbers from 4-1");

function printNto1(n){
    if(n===0) return;    //base condition
    
    console.log(n);
    printNto1(n-1);   //recursive call
}
printNto1(4);


//print numbers from 1-4//
console.log("Print Numbers from 1-5");

function print1to10(n){
    if(n>10) return;    //base condition

    console.log(n);
    print1to10(n+1);  //recursive call
}
print1to10(1);

//print numbers from 10-1//
console.log("Print Numbers from 10-1");

function print10to1(n){
    if(n===0) return;    //base condition

    console.log(n);
    print10to1(n-1);  //recursive call
}
print10to1(10);

//print helloworld 5 times//
function helloworld(n){
    if(n==0) return;
    console.log("Hello World");
    helloworld(n-1)
    

}
helloworld(5);

//print numbers first in sequence and then in reverse order

function twoOrder(n, current=1){
    if(current > n) return;
    console.log(current);
    twoOrder(n, current + 1);
    console.log(current);
    
   
}
twoOrder(5);

// 5 4 3 2 1 1 2 3 4 5
console.log("Diffrent order :");

function twoOrders(n, current=5){
    if(current < n) return;
    console.log(current);
    twoOrders(n, current - 1);
    console.log(current);
    
   
}
twoOrders(1);

//Sum of first n natural numbers
console.log("Sum of natural number:");
function sumOfNaturalNum(n) {
  if (n === 0) return 0; // base case
  return n + sumOfNaturalNum(n - 1); // recursion
}

console.log(sumOfNaturalNum(5));


//find the power of a number
console.log("Power of any number:");

function power(x,y){
    let result= x ** y;
    console.log(result);
    

}
power(2,3);

//reverse the string
function reverseString(str){
    if(str.length===0) return "";

    return str.slice(-1) + reverseString(str.slice(0,-1));
}
console.log(reverseString("Helloo"));

//find the factorial of any number
console.log("factorial of any number :");

function factorial(n){
    if(n===0 || n===1) return 1;
    return n * factorial(n-1);
}
console.log(factorial(5));

//Find the fibonacci series
console.log("Find the fibonacci series:");

function fibonacci(a, b, n) {
    if (n > 6) return;    
    process.stdout.write(a+" ");        
    fibonacci(b, a + b, n + 1); 
}


fibonacci(0, 1, 1);

