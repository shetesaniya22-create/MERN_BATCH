//linear search 
//Time complexity-> Best case=O(1)   Worst case=O(n)
//Works on limited data-set and unsorted dataset(not required sorted data)

console.log("Linear Search: ")
function linearSearch(arr, target){
    console.log("The element found at index: ");

    for(let index=0;index<arr.length;index++){
        if(arr[index]===target){
            return index;
        }
    }
    return -1;
    
}
console.log(linearSearch([1,2,3,4,5,6,7] , 4));


//To find the count of particular element in an array
console.log(" Find the count of particular element in an array:");
let input=[1,2,2,5,7,8,2,10];

function findOccurance(input,target){
   let result=[];
    
    for(let index=0;index<input.length;index++){
        
        if(input[index]===target){
            result.push(index);
        }
    }
    return result;
}
console.log(findOccurance(input,2));


//To find min number in an array
arr=[10,23,4,19,56];
function findMin(arr){
    let min=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
return min;
}
console.log(findMin(arr));


//To find max element in array
arr=[10,23,4,19,56];
function findMax(arr){
    let max=arr[0];
   
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
return max;
}
console.log(findMax(arr));

//To find the particular word in sentence
let str="I love coding in JS";
function findChar(str, searchTerm){
    arr=str.split(" ");
    console.log(arr);

    for(let word of arr){
        if(word=== searchTerm){
            return true;
        }
    }
    return false;
      
}

console.log(findChar(str,"coding"));

console.log(findChar(str,"me"));


//Calculate upperBound
//find how many duplicate elements are there - 
// how many times does X appears in the array
//Occurrence of element--> ub-lb
//Difference between linear
