//--------------------------------------SOME FUNCTIONS IN ARRAY---------------------------//

const { log } = require("node:console");


let arr=[2,4,7,9,6];

//SLICE- It doesn't changes the original array 
//1-Slice function works like it will include the beginning value and exclude the given index
//2-If we give first index only then it will print result from start index till N
//3-If we don't give start and end index then it will print whole array 

console.log("Slice Function: ");
console.log(arr.slice(1,4));
console.log(arr.slice(1));
console.log(arr.slice());
console.log({arr});




//SPLICE - Changes the original array
//1-Splice function delete the elements from array what is given 
// i.e (1,3) it will take the elements from 1-3 in array 
console.log("Splice Function: ");
console.log(arr.splice(1,3));
console.log(arr.splice(1));
console.log(arr.splice());
console.log({arr});

//SLICE 
//CONCATE - Combine two array
console.log("Concate Function: ");
let arr1=[12,13,14,15,16];
console.log(arr.concat(...arr1));


//---------------------LOOPS IN ARRAYS---------------------------------//
/*Basic FOR loop */

for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]);
    
}

/* FOR...........IN loop------> Return index of an array element*/
console.log("FOR IN LOOP-------->");

//we can use another variable name for INDEX
for(let index in arr1){  
    console.log(index);
    console.log(typeof(index));
}


/* FOR...........OF loop ----> Return value of array element*/
//we can use another variable name for VALUE
console.log("FOR OF LOOP-------->");
for(let value of arr1){
    console.log(value);
    

}

//Write a function that print the prefix sum of an array
//input arr=[12,4,-6,8];
//Output arr=[12,16,]
console.log("To print prefix sum using array: (METHOD-1) ");
let arr11=[12,4,-8,10];
let sum=0;
let newArr=[];
for(let i=0;i<arr11.length;i++){
    sum+=arr11[i];
    newArr.push(sum);

}
console.log({newArr});

console.log("To print prefix sum using array: (METHOD-2) ");
let sums=[];
sums[0]=arr11[0];
for(let i=1;i<arr11.length;i++){
    sums[i]=sums[i-1]+arr11[i];
    

}
console.log({sums});


//Swapping of two numbers using the third variable
console.log("Swapping of two numbers usng third variables:  ");

let x=10;
let y=20;
console.log({x,y});

let temp=x;
x=y;
y=temp;
console.log({x,y});


console.log("Swapping of two elements in an array:");
 arr1 = [10, 20, 30, 40]; 
function swapArray(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  console.log(arr);
}
swapArray(arr1, 1, 2);


console.log("To print index of odd elments in array: ");
arr1 = [1, 2, 3, 4];
function oddElementIndex(arr1){
    for(let i in arr11){
        if(arr1[i]%2!==0){
        console.log({i});
        
    }
}
}
oddElementIndex(arr1);


console.log("To print odd index elments in array: ");
for(let i=1;i<arr1.length;i+=2){
    console.log(arr1[i]);
    

}

/* QUESTION- Swap alternate elements of an array
  input arr1=[1,2,3,4,5];
  output arr1=[2,1,,4,3,5];

  input arr1=[1,2,3,4,5,6];
  input arr1=[2,1,4,3,6,5];*/

  arr1=[1,2,3,4,5];
  n =arr1.length;

  function swapEvenLength(arr1){
    for(let i=1;i<n;i+=2){
        
        let temp=arr1[i];
        arr1[i]=arr1[i-1];
        arr1[i-1]=temp;

        

    }
    console.log({arr1});
    
  }
  swapEvenLength(arr1);
  console.log("Swapping alternate elements : "+arr1.join(", "));
  
  /*Heterogenous property in JS---> We can add multiple data types withn same array*/
  arr=[1,2,"123",2.344,true,[3,4,"five",[2,5,"printMe"]]];
 
  //How to print printMe 
  
    console.log(arr[5][3][2]);
    
//HOMEWork----Given an array of consecutive numbers, but there's on number that's missing ,find it 

console.log("Missing Number Example ----->");
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
//HOMEWORK-- How to concate multiple arrays
console.log("Concate Function: ");
arr1=[12,13,14,15,16];
let arr2=[17,18,19,20,21];
console.log(arr.concat(arr1,arr2));


//print the subArrays 
arr=[1,2,3,4,5,6];
n=arr.length;
for(let i=0;i<n;i++){
    for(let j=i;j<n;j++){
          console.log(arr.slice(i,j+1));
    }
    
}

//Negative indexing in SLICE function
console.log("Negative indexing in slice function: ");

arr=[1,2,3,4,5,6];
n=arr.length;
console.log(arr.slice(-1));
console.log(arr.slice(-2));
console.log(arr.slice(-3));
console.log(arr.slice(-4));
console.log(arr.slice(-5));
console.log(arr.slice());
console.log(arr.slice(-3));

//printing subarrays---> Another method
console.log("Printing subarrays using another method: ");
arr=[1,2,3,4,5,6];
n= arr.length;
for(let i=0;i<n;i++){
  let subArr=[];
  for(let j=i;j<n;j++){
    subArr.push(arr[j]);
    console.log(subArr.join(" "));
  }
}






















