//-------------------------SOME FUNCTIONS IN ARRAY



let arr = [2, 4, 7, 9, 6];

// -------------------- SLICE -------------------- //
// Slice -> It does NOT change the original array
// 1. Includes the "start index" but excludes the "end index"
// 2. If only start is given, it prints till end
// 3. If nothing is given, it copies the whole array

console.log("----- Slice Examples -----");
console.log(arr.slice(1, 4));   // from index 1 to 3 -> [4,7,9]
console.log(arr.slice(1));      // from index 1 till end -> [4,7,9,6]
console.log(arr.slice());       // copy entire array -> [2,4,7,9,6]
console.log("Original array after slice:", arr);


// -------------------- SPLICE 
// Splice -> It CHANGES the original array
// Syntax: splice(start, deleteCount)
// Returns the deleted elements and mutates original array

console.log(" Splice Examples : ");
let arrCopy = [2, 4, 7, 9, 6];
console.log(arrCopy.splice(1, 3)); // delete 3 elements from index 1 -> [4,7,9]
console.log("After first splice:", arrCopy);
console.log(arrCopy.splice(1));    // delete from index 1 till end -> [6]
console.log("After second splice:", arrCopy);


// -------------------- CONCAT 
// Concat -> Combine arrays (does not change original)

console.log("----- Concat Example -----");
let arr1 = [12, 13, 14, 15, 16];
console.log(arr.concat(arr1)); 


// -------------------- LOOPS 
// FOR loop -> traditional way

console.log("For Loop Example ");
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// FOR...IN loop -> gives index (as string)
console.log("For...in Loop Example ");
for (let index in arr1) {
  console.log("Index:", index, "Value:", arr1[index]);
}

// FOR...OF loop -> gives values directly
console.log("For...of Loop Example ");
for (let value of arr1) {
  console.log("Value:", value);
}


// ------------->>> PREFIX SUM 
console.log("Prefix Sum Example (METHOD-1) ");
let arr11 = [12, 4, -8, 10];
let sum = 0;
let newArr = [];
for (let i = 0; i < arr11.length; i++) {
  sum += arr11[i];
  newArr.push(sum);
}
console.log(newArr);

console.log("Prefix Sum Example (METHOD-2) ");
let sums = [];
sums[0] = arr11[0];
for (let i = 1; i < arr11.length; i++) {
  sums[i] = sums[i - 1] + arr11[i];
}
console.log(sums);


// ------>>>>SWAPPING  
// Swap two numbers using third variable
console.log(" Swap Two Numbers Example");
let x = 10, y = 20;
console.log("Before swap:", { x, y });
let temp = x;
x = y;
y = temp;
console.log("After swap:", { x, y });

// Swap two elements in array
console.log("----- Swap Elements in Array Example -----");
arr1 = [10, 20, 30, 40];
function swapArray(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  console.log("After swapping:", arr);
}
swapArray(arr1, 1, 2);


// -------------------- ODD ELEMENT INDEX -------------------- //
console.log("----- Odd Element Index Example -----");
arr1 = [1, 2, 3, 4];
function oddElementIndex(arr1) {
  for (let i in arr1) {
    if (arr1[i] % 2 !== 0) {
      console.log("Index of odd element:", i);
    }
  }
}
oddElementIndex(arr1);


// -------------------- ODD INDEX ELEMENTS -------------------- //
console.log("----- Odd Index Elements Example -----");
for (let i = 1; i < arr1.length; i += 2) {
  console.log("Odd index element:", arr1[i]);
}


// -------------------- SWAP ALTERNATE ELEMENTS -------------------- //
console.log("----- Swap Alternate Elements Example -----");
arr1 = [1, 2, 3, 4, 5];
function swapEvenLength(arr1) {
  for (let i = 1; i < arr1.length; i += 2) {
    let temp = arr1[i];
    arr1[i] = arr1[i - 1];
    arr1[i - 1] = temp;
  }
  console.log("After alternate swap:", arr1);
}
swapEvenLength(arr1);


// -------------------- HETEROGENEOUS ARRAY -------------------- //
console.log("----- Heterogeneous Array Example -----");
arr = [1, 2, "123", 2.344, true, [3, 4, "five", [2, 5, "printMe"]]];
console.log("Access nested element:", arr[5][3][2]); // prints "printMe"


// -------------------- MISSING NUMBER -------------------- //
console.log("----- Missing Number Example -----");
arr = [1, 2, 3, 4, 7, 6];
n = arr.length;
let count = arr[0];
for (let i = 0; i < n; i++) {
  if (arr[i] == count) {
    count++;
  } else {
    console.log("Missing number is:", count);
    break;
  }
}


// -------------------- CONCAT MULTIPLE ARRAYS -------------------- //
console.log("----- Concat Multiple Arrays Example -----");
arr1 = [12, 13, 14, 15, 16];
let arr2 = [17, 18, 19, 20, 21];
console.log(arr.concat(arr1, arr2));


// -------------------- SUBARRAYS -------------------- //
console.log("----- Subarrays Example -----");
arr = [1, 2, 3, 4, 5, 6];
n = arr.length;
for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    console.log(arr.slice(i, j + 1));
  }
}


// -------------------- NEGATIVE INDEXING -------------------- //
console.log("----- Negative Indexing with Slice -----");
arr = [1, 2, 3, 4, 5, 6];
console.log(arr.slice(-1));  // last element
console.log(arr.slice(-2));  // last 2 elements
console.log(arr.slice(-3));  // last 3 elements 
console.log(arr.slice());    // full array
console.log(arr.slice(-3));  // again last 3
