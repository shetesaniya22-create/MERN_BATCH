let mySet=new Set();

mySet.add(10);
mySet.add(20);
mySet.add(10);//duplicate
mySet.add(30);
console.log(mySet);


console.log(mySet.has(20));
console.log(mySet.size);
console.log(mySet.clear());




//if value is exist or not in set
var fruits=new Set(["apple","banana","mango","apple","grapes"]);
fruits.delete("banana");
console.log(fruits.has("apple"));
console.log(fruits);

//Iteration over the set
/*----Print each element of set--*/

for(let i of fruits){
    console.log(i);
    
}
console.log(fruits);

//Remove duplicates from an array
let arr=[1,2,2,3,4];
let uniqueVal=new Set(arr);
console.log({uniqueVal});

//convert a set to an array
let colors=new Set(["red","white","grey","black"]);
let colorArray=Array.from(colors);
console.log({colorArray});

//find common elements from an array
let set1=new Set([1,2,3,4,5]);
let set2=new Set([2,3,5]);
let commonVal=new Set();
for(let items of set1){
    if(set2.has(items)){
        commonVal.add(items);
    }
}
console.log(commonVal);

//check subset or not
//let commonVal=new Set();
let isSubset=true;

for(let items of set1){
    if(set2.has(items)){
        isSubset=false;
        break;
    }
}
console.log(isSubset);


//mising number from set
let arr1=[1,2,3,4,5];
let arr2=[2,3,5];

set1=new Set(arr1);
set2=new Set(arr2);

arr=[];
let missingVal=new Set();
for(let items of set1){
    if(!set2.has(items)){
        arr.push(items)
    }   
}
console.log({arr});


//.........MAP..............//
/*----------STORES VALUE I  KEY-VALUE PAIR-----------*/
/*METHODS-->
          add or update()--> set (key,val)
          get the value -->  get(key)
          check if exist --> has(key)
          delete(key) -->   Remove key-val pair
          clear()    -->    Remove everything
          size       -->   gvive total number of element
*/

let marks=new Map();
marks.set("saniya", 95);
marks.set("sejal", 90);
marks.set("siya", 85);
console.log(marks);

for(let [name,score] of marks){
    console.log(name, "-->",score);
    
}

let nums = [1,2,3,4,5];

let doubled = nums.map(x => x * 2);

console.log(doubled);

/*normalise the string*/
let strArr = ['Hi', 'Bye'];

let normalised = strArr.map(x => x.toLowerCase());

console.log(normalised);


//find the pair that have given target sum
function findSumPairs(arr,n,targetSum) {
     let map=new Map();
     let count=0;
     for(let i=0;i<n;i++){
        let num=arr[i];
        map.set(num, (map.get(num) || 0) +1);
     }

     for(let i=0;i<n;i++){
        let num=arr[i];
        let complement=targetSum-num;

        if(map.has(complement)){
            count+=map.get(complement);

        }
        if(complement===num){
            count--;
        }
     }
     return Math.floor(count/2);
}

arr=[1,5,7,-1,5];
let targetSum=6;
console.log(findSumPairs(arr,5,6));


//Searching--->Linear and Binary
console.log("Linear Search:");

arr=[10,20,30,40];

function linearSearch(arr,n,target){
    for(let i=0;i<n;i++){
        if(arr[i]===target){
           return i;
        }
    }
    return -1;
}
console.log(linearSearch(arr,4,30));

//Binary search  (T.C-->O(log n))
function binarySearch(arr,target){
    let n=arr.length;
    let left=0;
    let right=n-1;
   while(left<=right){     
    for(let i=0;i<n;i++){
        
        let mid=Math.floor((left+right)/2);

        if(arr[mid]===target){
            return mid;
        }else if(arr[mid]>target){
            left=mid+1;
        }else{
            right=mid-1;
        }
    }
}
    return -1;
}

console.log(binarySearch([1,2,3,4,7,8],9));
console.log(binarySearch([1,2,3,4,7,8],3));


//return boolean values instead of index

/*Find the first occurance */

function binarySearche(arr,target){
    let n=arr.length;
    let left=0;
    let right=n-1;
    let result=-1;
   while(left<=right){     
    
        let mid=Math.floor((left+right)/2);

        if(arr[mid]===target){
            result=mid;
            right=mid -1;
            
        }else if(arr[mid]>target){
            left=mid+1;
        }else{
            right=mid-1;
        }
    }

    return result;
}


console.log(binarySearche([1,2,2,4,7,8],2));
console.log(binarySearche([1,2,3,4,7,8],3));








   














