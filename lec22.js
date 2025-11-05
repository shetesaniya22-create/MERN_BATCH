//REMOVE DUPLICATE ELEMENTS FROM AN ARRAY//
console.log("REMOVE DUPLICATE ELEMENTS FROM AN ARRAY : ");

function removeDuplicateElement(str){
    let str1=new Set();
    let result="";

    for(let i=0;i<str.length;i++){
        let ch=str[i];
        if(!str1.has(ch)){
            result+=ch;
            str1.add(ch);
        }
    }
  return result;
}

console.log(removeDuplicateElement("AccioJob"));
console.log(removeDuplicateElement("channel"));



//Find the count of pairs having sum K //
console.log("Find the count of pairs having sum K :");

function countOfPairOfSum(arr, target){
    let map=new Map();
    let count=0;

    for(let i=0;i<arr.length;i++){
        let num=arr[i];

        map.set(num, (map.get(num) || 0) +1);  //check if the num 

    }

    for(let i=0;i<arr.length;i++){
        let num =arr[i];
        let complement = target - num;

        if(map.has(complement)){
            count+=map.get(complement);
        }
        if(complement===num){
            count--;
        }
    }
    return Math.floor(count/2);
}

console.log(countOfPairOfSum([1,2,3,4,5,1],5));


//ANAGRAM DELETION FROM 2 STRINGS//
console.log("ANAGRAM DELETION FROM 2 STRINGS :  ");

function minDeletion(str1, str2){
    let freq1=new Map();
    let freq2=new Map();

    for(let i=0;i<str1.length;i++){
        let ch=str1[i];

        freq1.set(ch, (freq1.get(ch) || 0) + 1);

    }

    for(let i=0;i<str2.length;i++){
        let ch=str2[i];

        freq2.set(ch, (freq2.get(ch) || 0) + 1);

    }

let deletion=0;
for(let i=0;i<26;i++){
    let letter=String.fromCharCode(97+i);
    let count1=freq1.get(letter) || 0;
    let count2=freq2.get(letter) || 0;
     deletion+=Math.abs(count1-count2);
}
  return deletion;
}

console.log(minDeletion("tarzan","star"));




//--------------------------------------[ BINARY SEARCH ]-------------------------------------------------------//
/* 
   1) Works on sorted array
   2) Repeatedly use the search space in the half
   3) Uses divide and conquer method
   4) Time Complexity---> O(log n)
*/
console.log("BINARY SEARCH--->");

function binarySearch(arr,target){
    let left=0;
    let right=arr.length;

    while(left<=right){
        let mid=Math.floor((left+right)/2);

        if(arr[mid]===target){
            return mid;
        }else if(arr[mid]<target){
            left=mid+1;
        }else{
            right=mid-1;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5,6],12));
console.log(binarySearch([1,2,3,4,5,6],6));


console.log("First Occurance of element index element: ");
function firstOccurance(arr,target){
    let left=0;
    let right=arr.length;
    let result=-1;
   

    while(left<=right){
        let mid=Math.floor((left+right)/2);

        if(arr[mid]===target){
            result=mid;
            right=mid -1;
        }else if(arr[mid]<target){
            left=mid+1;
        }else{
            right=mid-1;
        }
    }
    return result;
}

console.log(firstOccurance([4,4,5,6,6,7],4));
console.log(firstOccurance([1,2,4,5,6,6,7],4));


//Finding the element in STRING
console.log("Find element in STRING:  ");

function findElementInString(str,target){
    
    let left=0;
    let right=str.length;
    let result=-1;

    while(left<=right){
        let mid=Math.floor((left+right)/2);

        if(str[mid]===target){
            result =mid ;
            right=mid-1;
        }else if(str[mid] < target){
            left=mid+1;
        }else{
            right=mid-1;
        }
    }
    return result;
}

let arr=["apple", "banana", "banana", "cherry", "date"];
console.log(findElementInString(arr,"banana"));
console.log(findElementInString(arr,"fig"));


//-------------LOWER BOUND----------//
console.log("Find index of lower bound element");
function lowerBound(arr,target){
   let low=0;
   let high=arr.length;

    for(let i=0;i<arr.length;i++){
        let mid=Math.floor((low+high)/2);

        if(arr[mid]===target){
            for(let i=0;i<mid;i++){
                if(arr[i]>=arr[mid]) return i;
            }
        }else if(arr[mid] < target){
            left=mid+1;
        }else{
            right=mid-1;
        }
        }
        return -1;
    }

    console.log(lowerBound([4,2,4,4,6,8], 4));





console.log("UPPERBOUND:");
function upperBound(arr,target){
   let low=0;
   let high=arr.length;

    for(let i=0;i<arr.length;i++){
        let mid=Math.floor((low+high)/2);

        if(arr[mid]===target){
            for(let i=mid+1;i>=0;i++){
                if(arr[i]>arr[mid]) return i;
            }
        }else if(arr[mid] < target){
            left=mid+1;
        }else{
            right=mid-1;
        }
        }
        return -1;
    }

    console.log(upperBound([1,2,4,4,6,8], 4));
    




















