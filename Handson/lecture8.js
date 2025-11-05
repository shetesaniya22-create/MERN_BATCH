//FOR LOOPS (Hands-on Practice)

/* 
   For Loop Execution Flow:
   1. Initialize → runs only once
   2. Condition check → if false, loop stops
   3. Execute code → if condition true
   4. Increment/Decrement → then go back to step 2

   Flow: 1 -> 2 -> 3 -> 4 -> 2 -> 3 -> 4 -> ...
*/


// Print "Hii" 10 times 
for (let i = 1; i <= 10; i++) {  
    console.log("Hii");  // prints the word 10 times
}
// Time Complexity: O(N) → here N = 10



// Print counting 1 to 10 
for (let i = 1; i <= 10; i++) {
    console.log(i);  // prints 1,2,3,...,10
}
// Time Complexity: O(N)



// Numbers divisible by 3 between 1 and 50 
// Method 1: Incrementing by 3 each time
for (let num = 3; num <= 48; num += 3) {
    console.log(num);
}
// Time Complexity: O(N/3) → reduced steps



// Method 2: Check divisibility inside loop
for (let num1 = 3; num1 <= 48; num1++) {
    if (num1 % 3 == 0) {
        console.log(num1);
    }
}
// Time Complexity: O(N) → checks every number



// Squares of numbers 20 to 35 
let N = 35;
for (let i = 20; i <= N; i++) {
    console.log(i * i);
}
// Time Complexity: O(N - start) → here 16 iterations



// Another approach using start + count
let n1 = 15;    // count of numbers
let start = 20; // starting point
for (let i = start; i < start + n1; i++) {
    console.log(i * i);
}
// Time Complexity: O(N)



//---------- Multiplication Table 
let tableOfNum = 6;
let n11 = 10; // print till 10
for (let i = 1; i <= n11; i++) {
    console.log(tableOfNum + " * " + i + " = " + (tableOfNum * i));
}
// Time Complexity: O(N)



//-----------Sum of first 100 numbers 
let number = 100;
let result = 0;
for (let i = 1; i <= number; i++) {
    result += i;
}
console.log(result); // prints 5050
// Time Complexity: O(N)



//--------------------- Using direct formula → n(n+1)/2
let r;
for (let i = 1; i <= number; i++) {
    r = (number * (number + 1)) / 2;
}
console.log("Sum of first 100 is: " + r);
// Time Complexity: O(1) → constant time (formula based)



//-------------------------- Short Circuiting Examples 
// In JavaScript: 
//  - Any non-zero value → TRUE
//  - Zero, ""(empty), null, undefined, NaN → FALSE

const n12 = false && 5;       // false (short-circuits)
const n13 = n12 === false && 34; // true && 34 → 34
const n14 = n13 && 67;        // 34 && 67 → 67
const n15 = true && n13==34 && 45 && n12==false; // → 45
const n16 = (n12==false && n13==34) || (n14==false && n15==true);
console.log({ n12, n13, n14, n15, n16 });

//---------------------- Check if "" * 1 evaluates to true or false
if ("" * 1) {  // → 0 → false
    console.log("Value is non-zero");
} else {
    console.log("Value is zero");
}

// Short circuiting with && 
console.log(false && "Hello"); // false
console.log(0 && 5);           // 0
console.log("Hi" && "Hello");  // Hello

// Short circuiting with ||
console.log(true || "Hello");  // true
console.log(0 || 5);           // 5
console.log("" || "Default");  // Default
// Time Complexity: O(1) for all → single evaluations



//Factorial of a number 
let fact = 1;
let numbers = 5;
for (let i = numbers; i >= 1; i--) {
    fact = fact * i;
}
console.log({ fact }); // factorial(5) = 120
// Time Complexity: O(N)



// Prime number check (method 1)
// Count total divisors → prime has only 2 divisors
let Num = 15;
let divisor = 0;
for (let i = 2; i <= Num; i++) {
    if (Num % i == 0) {
        divisor++;
    }
}
const message = divisor > 2 ? "Not Prime" : "Prime";
console.log(message);
