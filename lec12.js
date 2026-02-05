/*---------------------------------ARRAYS IN JS-------------------------------*/



let names=["Name1",
          "Name2",
          "Name3",
          "Name4",
          "Name5",
          "Name6",
          "Name7",
          "Name8",
    
];
let n=names.length;
for(let i=0;i<n;i++){
    console.log(names[i]);
    
}


let arr=[1,2,3,4,5,6,7,8,9,10];
let m=arr.length;
let sum=0;
sumOfArray(arr);
console.log({sum});


function sumOfArray(arr){
   
for(let i=0;i<m;i++){
    sum+=arr[i];
}
return sum;
}

//find the absolute difference of sum of all odd elements and sum of all even elements
let evenSum=0;
let oddSum=0;
let arrs=[1,2,3,4,5,6,7,8];
let length=arrs.length;

for(i=0;i<length;i++){
    if(arrs[i]%2==0){
        evenSum+=arrs[i];
    }else{
        oddSum+=arrs[i];
    }
}
console.log({evenSum});
console.log({oddSum});

let abs=Math.abs(evenSum-oddSum);
console.log({abs});

//By using function
abs=absDifference(arr);

function absDifference(arr){
let evenSum=0;
let oddSum=0;

let length=arrs.length;
for(i=0;i<length;i++){
    if(arrs[i]%2==0){
        evenSum+=arrs[i];
    }else{
        oddSum+=arrs[i];
    }
}
return Math.abs(evenSum-oddSum);
}
console.log({abs});


/* FizzBuzz problem*/
//if multiple of 3 theN FIZZ
//if multiple of 5 the BUZZ
//if multiple of 3 & 5 the FIZZBUZZ

let array=[2,3,5,10,9,15];
FizzBuzz(array);

function FizzBuzz(array){
   let lengths=array.length;
   for(let i=0;i<lengths;i++){
    if(array[i]%3===0 && i%5===0){
        console.log( "FizzBuzz");
       
    }else if(array[i]%5===0){
        console.log("Buzz");
         
     
    }else if(array[i]%3===0){
        console.log("Fizz");
        
    }else{
        console.log(array[i]);
        
    }

   }
}

//To change array elements usng array index
arr=["Rajat","Dev","Ram","Sita"];
arr[0]="Laxman";
console.log(arr);


/*How to insert multiple elements using push()
How to insert multiple elements using unshift()*/

arr=[1,2,3,4,5,7];
arr[5]=6;
console.log({arr});

//to insert the elements at the end of an array
arr.push(7);

console.log(arr);
arr.push(8,9,10);
console.log(arr);

//to insert the elements at the beginning of an array
arr.unshift(-2,-1,0);
console.log(arr);

const arr1=[1.5,6,9,2];
arr[0]=10;
//arr1=[5,7,8,9]; // this is wrong rhs violates constant property

//Deletion of an array elements
/*-------------Deletion at end*/
arr.pop();
console.log(arr);


/*-------------Deletion at beginning*/
arr.shift();
console.log(arr);




/* Inbuilt methods to find the first index*/
console.log("Index of 6 is " +arr.indexOf(6));
console.log("Index of 7 is " +arr.indexOf(7)); //Return -1 if element is not present in an array

/*Inbuilt methods to find the element is present or not*/
console.log(arr.includes(6));
console.log(arr.includes(9));

/*Inbuilt methods to find the last index of an element */
console.log("Last index of an element is "+arr.lastIndexOf(2));

//------------------Find and replace the value of element=10 to 14 using indexOf and includes() methods


let arrr = [1, 3, 10, 5, 9];
findElement(arrr);

function findElement(arrr) {
  if (arrr.includes(10)) {
    let index = arrr.indexOf(10);
    arrr[index] = 14;
  }else{
    return -1;
  }
}

console.log(arrr);

/* Searching in array
H.W--> write a function to return the index of target element 
function findIndex(arr.targetValue){

--------------CODE---------------
}
if targetValue is not present then return -1

consider the unique elements in array
*/
function findIndex(arr, targetValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetValue) {
      return i;  
    }
  }
  return -1; 
}


arr = [10, 20, 30, 40, 50];
console.log(findIndex(arr, 30)); 
console.log(findIndex(arr, 50)); 
console.log(findIndex(arr, 100)); 





