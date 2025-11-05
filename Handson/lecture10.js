// .......................... LOOPS, DO-WHILE & SWITCH .......................... //

/*
   
   - If we repeat the same console.log many times, it's:
         Boring for the developer
         Error-prone (easy to miss a line)
         Hard to count repetitions
         Painful to update later
   Example: If we want to change "Hi" → "Hii", we have to edit every line.
*/

//  Bad way: repeating code manually
console.log("Hii!!");
console.log("Hii!!");
console.log("Hii!!");



// --------------------------- WHILE LOOP --------------------------- //
// while → keeps running as long as condition is true

// Print numbers 1 to 10
let n = 1;
while (n <= 10) {
    console.log(n);
    n++;
}
/*
Time Complexity: O(n) → n = 10 in this case
*/


// Example 2: Print even numbers till 25
let number = 1;
while (number < 25) {
    if (number % 2 === 0) {
        console.log(number);
    }
    number += 1;
}
/*
Time Complexity: O(25) → linear growth
*/


// Example 3: Countdown from 10 to 1
let n1 = 10;
while (n1 > 0) {
    console.log(n1);
    n1--;
}
/*
Time Complexity: O(n) where n = 10
*/


//Greatest Common Divisor 
let a = 48;
let b = 18;
while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}
console.log("GCD is:", a);
/*
48 % 18 = 12
18 % 12 = 6
12 % 6 = 0
So, GCD = 6

Time Complexity: O(log(min(a, b)))
*/



// DO-WHILE LOOP 
/*
   - Difference from while: 
     It executes the block at least once before checking the condition.
*/

//Simple do-while
do {
    console.log("Hii, I'm DO-WHILE loop");
} while (false);



// Simulating user input loop
let response;
let responseCounter = 0;
do {
    // In browser → prompt("Do you want to continue?")
    response = "Yes"; 
    console.log("Response:", response, "at step", responseCounter);
    responseCounter++;
} while (response === "Yes" || response === "yes");



//  SWITCH CASE 
//Better way than multiple if-else chains

//Days of the week
let day = 4;
switch (day) {
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
/*Time Complexity: O(1) → direct jump to case
*/


// Grading system
let marks = 20;
switch (true) {
    case marks > 80:
        console.log("A+");
        break;
    case marks <= 80 && marks > 60:
        console.log("A");
        break;
    case marks <= 60 && marks > 40:
        console.log("B");
        break;
    default:
        console.log("Fail");
        break;
}
/*
Time Complexity: O(1)
*/
