
//  IF-ELSE STATEMENTS


// Check if a number is even or odd
let num = 4;
if (num % 2 == 0) {
    console.log("Even"); // condition true => print "Even"
} else {
    console.log("Odd");  // condition false => print "Odd"
}

//Check if a person can vote
let age = 24;
if (age >= 18) {
    console.log("Can vote"); // eligible
} else {
    console.log("Cannot vote"); // underage
}

// Check if half of a given number is even or odd
let number = 21;
if ((number / 2) % 2 == 0) {
    console.log("Half is Even");
} else {
    console.log("Half is Odd");
}

// == vs ===
// == checks only value, === checks value + datatype
let a = "12";  // string
let b = 12;    // number
let c = 12;    // number

if (a == b) {
    console.log("Both a and b have the same value");
}

if (b == c) {
    console.log("Both b and c have the same value");
}

if (a === c) {  // strict equality (string !== number)
    console.log("Both a and c have the same value and datatype");
}

// Grading system
let score = 90;
if (score >= 80) {
    console.log("Grade A");
} else if (score >= 60) {
    console.log("Grade B");
} else if (score >= 40) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

//Check maturity by age and gender
let ages = 24;
let gender = "Female";

if (ages >= 18 && gender == "Female") {
    console.log("Mature girl");
} else if (ages >= 18 && gender == "Male") {
    console.log("Mature boy");
}

// Same example using nested if
if (ages >= 18) {
    if (gender == "Female") {
        console.log("Mature girl");
    }
    if (gender == "Male") {
        console.log("Mature boy");
    }
}

//Lucky draw winner check
let ticketNum = 101;
if (ticketNum == 11 || ticketNum == 101) {
    console.log("Winner");
} else {
    console.log("Loser");
}

//User login + subscription check
let loggedIn = true;
let subscription = true;

if (loggedIn && subscription) {
    console.log("Premium user with premium access");
} else {
    console.log("Upgrade your plan");
}

//Check if a number is "good" (not equal to 17)
let nums = 17;
if (nums !== 17) {
    console.log("Number is good");
} else {
    console.log("Number is bad");
}

// Palindrome check (3-digit number)
let numbr = 121;
let firstDigit = Math.floor(numbr / 100); // take first digit
let lastDigit = numbr % 10;               // take last digit

if (firstDigit == lastDigit) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

//Check if number is decimal or integer
let n = 12.5;
if (Math.floor(n) == n) {
    console.log("Integer");
} else {
    console.log("Decimal");
}
// Another method using modulo
if (n % 1 == 0) {
    console.log("Integer");
} else {
    console.log("Decimal");
}

//Math.floor() vs Math.ceil()
let s = 11.01;
console.log(Math.floor(s)); // rounds down => 11
console.log(Math.ceil(s));  // rounds up   => 12

// Find greater number between two numbers
let x = 11;
let y = 12;
let z;
if (x > y) {
    z = x;
} else {
    z = y;
}
console.log("Greater number is " + z);

// Find highest marks with student name
let name1 = "Ram";
let name2 = "Shyam";

let mark1 = 40;
let mark2 = 30;

let highMark;
let highMarkName;

if (mark1 > mark2) {
    highMark = mark1;
    highMarkName = name1;
} else {
    highMark = mark2;
    highMarkName = name2;
}
console.log(highMarkName + " has the highest marks which is " + highMark);

// initialize with first student, then compare
let names1 = "Ram";
let names2 = "Shyam";

let marks1 = 70;
let marks2 = 30;

let highestMark = marks1;
let highestName = names1;

if (marks2 > marks1) {
    highestMark = marks2;
    highestName = names2;
}
console.log(highestName + " has highest marks as " + highestMark);

//Greatest number among three
let n1 = 20;
let n2 = 10;
let n3 = 65;
let maximum;

if (n1 > n2 && n1 > n3) {
    maximum = n1;
} else if (n2 > n3) {
    maximum = n2;
} else {
    maximum = n3;
}
console.log("Maximum number is " + maximum);

// Using built-in Math functions
console.log(Math.max(n1, n3));          // max of 20, 65
console.log(Math.min(n1, n3));          // min of 20, 65
console.log(Math.max(n1, n2, n3));      // max of all 3
console.log(Math.min(n1, n2, n3));      // min of all 3
