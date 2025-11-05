/* ------------------------- FUNCTIONS IN JAVASCRIPT ------------------------- */

/*
 Functions are reusable blocks of code that perform specific tasks.
 They help follow the DRY principle → "Don't Repeat Yourself".
 Instead of writing the same code again and again, 
 we put it inside a function and call it whenever needed.
*/


// ---------FUNCTION DEFINITION & CALLING 

// Defining a simple function
function greetUser() {
  console.log("Hello World");
}

// Calling/Invoking the function (can be called multiple times)
greetUser();
greetUser();
console.log("Bye World");
greetUser();

// ------------------------- PARAMETERIZED FUNCTIONS 
/*
 Parameters act like "variables" that we pass to a function.
 Arguments are the actual values given to those parameters.
*/

function greetSpecificUser(name) {
  console.log("Hello " + name);
}

// Passing arguments
greetSpecificUser("Deep");
greetSpecificUser("Anjlesh");

/* Function with multiple parameters */
function showCheckInTime(name, time) {
  console.log("Hello " + name + " you checked in at: " + time);
}
showCheckInTime("Mayur", "9pm");
showCheckInTime("Shweta", "10am");

// --------- SINGLE FUNCTION TO HANDLE MULTIPLE OUTPUTS 
function welcomeGuest(name, place) {
  console.log("Hello " + name + ", Welcome to our " + place);
}
welcomeGuest("Riya", "App");
welcomeGuest("Pratik", "Website");
welcomeGuest("Deep", "Office");

// ----------- RETURN STATEMENT 
function sum(a, b) {
  const c = a + b;
  return c; // returns value back to the caller
}

const sum1 = sum(1, 4);
const sum2 = sum(13, 9);
console.log({ sum1, sum2 });

/* NOTE: If no return is written → function returns 'undefined' */
const sf = greetUser(); // no return inside greetUser
console.log({ sf }); // prints undefined

// ------------------------- GREATEST OF TWO NUMBERS
function max(a, b) {
    return a > b ? a : b;
}
console.log(max(2, 4), max(19, 23), max(29, 38));

/* HW: Write a function to find MINIMUM of two numbers using all above 4 methods */

// DEFAULT PARAMETERS 
function sum23(a = 0, b = 0, c = 0) {
  return a + b + c;
}
console.log(sum23(10, 12)); // sum of 2 numbers
console.log(sum23(1, 4, 2)); // sum of 3 numbers

// --------------------- NESTED FUNCTIONS 

// Assuming today's date is 25th of the month
function calculateDays(issuedDate) {
  return 25 - issuedDate; // how many days since issued
}

function libraryFine(issuedDate = 0) {
  const daysOfIssuance = calculateDays(issuedDate);

  // Fine logic: if more than 10 days → 3 Rs per extra day
  return daysOfIssuance > 10 ? (daysOfIssuance - 10) * 3 : 0;
}

console.log("Total Fine: " + libraryFine(2));  // Issued 23 days ago → fine
console.log("Total Fine: " + libraryFine(12)); // Issued 13 days ago → small fine
console.log("Total Fine: " + libraryFine(22)); // Only 3 days ago → no fine

// ------------------------- REST OPERATOR 
/*
 Rest operator collects multiple arguments into an array.
 Always comes LAST in function params.
*/
function sumN(a, b, ...c) {
  console.log("First two numbers:", a, b);
  console.log("Remaining numbers (array):", c);
}
sumN(1, 3, 5, 7, 9, 11);

// ------------------------- AVERAGE OF THREE NUMBERS 
function average(a, b, c) {
  return (a + b + c) / 3;
}
console.log("Average:", average(5, 6, 7));

//------------------------ FACTORIAL USING RECURSION 
function fact(n) {
  if (n == 0 || n == 1) {
    return 1; 
  }
  return n * fact(n - 1); 
}
console.log("Factorial of 5:", fact(5));

/*
 Formula: nCr = n! / (r! * (n-r)!)
*/

function factorial(n) {
  if (n == 0 || n == 1) return 1;
  return n * factorial(n - 1);
}

function nCr(n, r) {
  return factorial(n) / (factorial(r) * factorial(n - r));
}
console.log("nCr(5, 4):", nCr(5, 4));

/* ---------------- CHECKING VOTING ELIGIBILITY */
function canVote(userName, userAge) {
  if (userAge >= 18) {
    console.log(userName + " is allowed to vote ");
  } else {
    console.log(userName + " is not allowed to vote ");
  }
}
canVote("Saniya", 22);
canVote("Rucha", 12);

