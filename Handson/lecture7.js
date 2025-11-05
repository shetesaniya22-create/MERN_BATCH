//....................................TERNARY OPERATOR....................................//
// Ternary operator is a compact form of if...else.
// Syntax:  condition ? value_if_true : value_if_false
// Important: It always needs both true and false parts.


// Check number is even or odd
const numb = 10;
// If remainder of division by 2 is zero → Even, else Odd
numb % 2 == 0 ? console.log("Even") : console.log("Odd");

// We can also store the result instead of printing directly
const outputs = numb % 2 == 0 ? "Even" : "Odd";
console.log(numb + " is " + outputs);


// Check if number is positive or negative
const numbs = -10;
// Direct print using ternary operator
numbs > 0 ? console.log("Positive") : console.log("Negative");


// Nested ternary operator → to check positive, negative, or zero
let a1 = -20;
let R = a1 > 0 ? "Positive" :
        a1 < 0 ? "Negative" :
        "Zero"; // executes only if above two conditions fail
console.log(a1 + " is a " + R + " number");


// Find higher mark and name of that person
let nam1 = "Ram";
let nam2 = "Shyam";

let m1 = 70;
let m2 = 30;

// If m1 is greater, Ram is higher, else Shyam
let higherNam = m1 > m2 ? nam1 : nam2;
let higherMark = m1 > m2 ? m1 : m2;
console.log(higherNam + " having highest marks as " + higherMark);

// Multiple statements can be grouped with ( , ) inside ternary
m1 > m2 ? (higherNam = nam1, higherMark = m1) :
          (higherNam = nam2, higherMark = m2);
console.log(higherNam + " having very highest marks as " + higherMark);


// Find greater number among three numbers
const n11 = 10;
const n12 = 208;
const n13 = 87;

// Nested ternary used here to find maximum
const maxNum = n11 > n12 && n11 > n13 ? n11 : 
               n12 > n13 ? n12 : n13;
console.log("The largest number is " + maxNum);

// Easier way using Math functions
console.log(Math.max(n11, n12, n13)); // maximum value
console.log(Math.min(n11, n12, n13)); // minimum value


// Convert number into day of week
const d = 3;
const day = d == 1 ? "Monday" :
            d == 2 ? "Tuesday" :
            d == 3 ? "Wednesday" :
            d == 4 ? "Thursday" :
            d == 5 ? "Friday" :
            d == 6 ? "Saturday" :
            d == 7 ? "Sunday" :
            "Invalid number"; // default case
console.log("The day is: " + day);


// Check person can vote or not
let age = 19;
// If 18 or above → can vote
let canVoteOrNot = age >= 18 ? "Can Vote" : "Cannot vote";
console.log(canVoteOrNot);


// Check if half of a number is even or odd
let num = 27;
// Divide by 2 → check result modulo 2
let evenOrOdd = ((num / 2) % 2 == 0) ? "Number is even" : "Number is odd";
console.log(evenOrOdd);


// == vs ===
// == compares only values (ignores type)
// === compares values AND types (strict equality)
let a = "34"; // string
let b = 34;   // number
let c = 34;   // number

// Using ==
let equality = a == b ? (a + " is equal to " + b) : (a + " is not equal to " + b);
console.log(equality);

// Using ===
equality = a === b ? (a + " is equal to " + b) : (a + " is not equal to " + b);
console.log(equality);


// Assign grade based on score
let score = 50;
let grade = score >= 80 ? "A+" :
            score < 80 && score >= 60 ? "A" :
            score < 60 && score >= 50 ? "B" :
            "FAIL"; // fallback if all above fail
console.log(grade);


// Check maturity based on gender and age
let agee = 23;
let gender = "Female";
// Both age and gender conditions combined using &&
let result = agee > 18 && gender == "Female" ? "Mature Girl" :
             agee > 18 && gender == "Male" ? "Mature Boy" :
             "Invalid Input";
console.log(result);


// Lucky draw winner check
let num1 = 12;
// If number is exactly 11 or 101 → Winner, otherwise Loser
let winnerOrLoser = (num1 == 11 || num1 == 101) ? "Winner" : "Loser";
console.log(winnerOrLoser);


// Check login + subscription status
let loggedIn = true;
let subscription = true;
// Both must be true to access premium
let premiumOrNot = loggedIn && subscription ? "Premium user having premium access of content" :
                   "Upgrade your plan";
console.log(premiumOrNot);


// Check if number is good (only 17 considered good)
let n1 = 89;
let goodOrBad = n1 == 17 ? "Number is good" : "Number is bad";
console.log(goodOrBad);


// Check if number is palindrome (first and last digit same)
let number = 238;
let firstDigit = Math.floor(number / 100); // extracts 1st digit (for 3-digit number)
let lastDigit = number % 10;               // extracts last digit
let palindrome = firstDigit == lastDigit ? (number + " is palindrome") :
                                            (number + " is not palindrome");
console.log(palindrome);


// Check if number is decimal or integer
let n = 12.5;
// Math.floor removes decimal part → compare with original
let decimalOrInteger = (Math.floor(n) === n) ? (n + " is an integer") :
                                             (n + " is a decimal number");
console.log(decimalOrInteger);


// Find greater number between two numbers
let num11 = 620;
let num12 = 67;
let greaterNum = num11 > num12 ? (num11 + " is greater than " + num12) :
                                 (num12 + " is greater than " + num11);
console.log(greaterNum);


