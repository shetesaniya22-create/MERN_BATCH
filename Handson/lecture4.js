/*............BASICS CONCEPTS.......................*/

// Print a simple string
console.log("Hello world");

// Variables with let
let a = 4;
let b = 6;
let c = a + b; // addition
console.log(c); // prints 10

// Another example with const (constant values cannot be reassigned)
console.log("Hello world");
const x = 14;
const y = 6;
const z = x + y;
console.log(z); // prints 20

// Multiplication
c = a * b;
console.log("a * b = " + c); // prints "a * b = 24"

// Division
c = b / a;
console.log("b/a = " + c); // prints "b/a = 1.5"

// Division with 0 and Infinity
c = -4 / 0;
console.log("-4 / 0 =", c); // in JS: negative number / 0 = -Infinity

c = 4 / Infinity;
console.log("4 / Infinity =", c); // anything finite / Infinity = 0

// Remainder operator --Modulous
c = a % b;
console.log("a%b = " + c); // 4 % 6 = 4

// String concatenation
const father_name = "Sunil"; // const = cannot be reassigned
console.log("My father name is: " + father_name);

const brandName = "Amazon";
console.log("Brand name is: " + brandName + 2); // outputs "Amazon2" (string + number => string)

// Using var
var x1 = "Saniya Sunil Shete";
console.log("My name is: " + x1);

// A constant variable with a number
const emptyVariable = 5;
console.log("Empty variable is: " + emptyVariable);

// Declaration and initialization
let newVar;           // only declared
newVar = "saniya";    // initialized later

// Case-sensitive variable names
let D = "Saturday";
let d = "Monday";
console.log("Days are: " + d + "  " + D);

// Snake_case naming
let date_of_birth = 13;
console.log(date_of_birth);

// typeof operator - tells the data type
console.log(typeof brandName); // string
console.log(typeof a);         // number

let l = true;
console.log(typeof l); // boolean

// Assignment operators
let p = 5;
p = p + 5;  // now 10
p += 5;     // now 15
p *= 2;     // now 30
console.log(p);

// String concatenation vs multiple arguments in console.log
console.log("Hello" + "  " + "World"); // Hello  World
console.log("Hello World", 2);         // Hello World 2

// String + number
let s = "10";
console.log(s + 2); // "102" (string concatenation)
console.log(("s+2*4") + 2); // "s+2*42" (just string + 2)

// Conversion examples
const min = 24;
const sec = min * 60;
console.log("The converted value is: " + sec); // 1440

// Extract last digit of a number
const number1 = 234;
const lastDigit = number1 % 10;
console.log("Last digit of", number1, "is", lastDigit);

// Extract second last digit
const num1 = 123;
const numWithoutLastDigit = Math.floor(num1 / 100);
const secondLastDigit = numWithoutLastDigit % 10;
console.log(secondLastDigit); // 1

// Multiplying a string with a number
const str = "abc";
let result = str * 2; // NaN (Not a Number)
console.log(result);

// Power function
result = Math.pow(2, 5); // 2^5 = 32
console.log(result);

// String + number (string wins in concatenation)
const num = "123";
let r = num + 2;
console.log(r); // "1232"

// Floating point precision issue
let n = 0.4 + 0.9; // may give 1.3 but floating precision can sometimes be off
console.log(n);

// Remainder with negative dividend
let g = -31 % 7;
console.log(g); // -3

// Operator precedence
let k = 2 ** 4 + 12 - 6 / 3 * 3 % 3;
// Steps:
// 2 ** 4 = 16
// 6 / 3 = 2
// 2 * 3 = 6
// 6 % 3 = 0
// So => 16 + 12 - 0 = 28
console.log(k);


// Hoisting example
let c23 = 7;
console.log(c23);

console.log(a1); // undefined 
var a1 = 4;

// Complex expressions with precedence
let c1 = 3 * 4 + 30 / 6 * 5 ** 2;
console.log(c1);

let x12 = 3 + 3 ** 4 / 3 ** 2 - 3 * 4 / 6;
console.log(x12);

const y1 = ("123" + 1) * 2 ** 2 - 21 / 7;
// "123" + 1 = "1231" (string)
// "1231" * 4 = 4924 (converted to number)
// 21 / 7 = 3
// => 4924 - 3 = 4921
console.log(y1);

const z1 = "123" + 5 ** 5 / 25 ** 2 / 5;
// 5 ** 5 = 3125
// 25 ** 2 = 625
// 3125 / 625 = 5
// 5 / 5 = 1
// => "123" + 1 = "1231"
console.log(z1);

const z2 = "123" + 5 ** 5 / 25 ** 2 / 5 % 5;
// we already know 5**5/25**2/5 = 1
// 1 % 5 = 1
// => "123" + 1 = "1231"
console.log(z2);

// Weird expression with string multiplication
const dsl = 4 + "34" * " " / 5;
// " " (empty string) → converted to 0
// "34" * 0 = 0
// 0 / 5 = 0
// 4 + 0 = 4
console.log(dsl);

