/*----------------------ARRAYS IN JS*/

// Array of names
let names = [
  "Name1",
  "Name2",
  "Name3",
  "Name4",
  "Name5",
  "Name6",
  "Name7",
  "Name8",
];

// Length property gives total number of elements
let n = names.length;

// Printing names one by one
for (let i = 0; i < n; i++) {
  console.log(names[i]);
}

// Example: Sum of all array elements
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let m = arr.length;
let sum = 0;

sumOfArray(arr); // function call
console.log({ sum }); // should print total sum

function sumOfArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Find absolute difference of sum of all odd and even elements
let evenSum = 0;
let oddSum = 0;
let arrs = [1, 2, 3, 4, 5, 6, 7, 8];
let length = arrs.length;

for (let i = 0; i < length; i++) {
  if (arrs[i] % 2 === 0) {
    evenSum += arrs[i];
  } else {
    oddSum += arrs[i];
  }
}
console.log({ evenSum });
console.log({ oddSum });

let abs = Math.abs(evenSum - oddSum);
console.log({ abs });

//Using function
abs = absDifference(arr);

function absDifference(arr) {
  let evenSum = 0;
  let oddSum = 0;

  //FIXED: use arr.length instead of arrs.length
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] % 2 === 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }
  return Math.abs(evenSum - oddSum);
}
console.log({ abs });

// ---------------------------------------------------------------------------
// FizzBuzz Problem
// if multiple of 3 → FIZZ
// if multiple of 5 → BUZZ
// if multiple of 3 & 5 → FIZZBUZZ

let array = [2, 3, 5, 10, 9, 15];
FizzBuzz(array);

function FizzBuzz(array) {
  let lengths = array.length;
  for (let i = 0; i < lengths; i++) {
    // ✅ FIXED: should check array[i] not i
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      console.log("FizzBuzz");
    } else if (array[i] % 5 === 0) {
      console.log("Buzz");
    }
}
}