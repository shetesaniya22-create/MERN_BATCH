//Binary Search---> Divide and conquer method
//Works only on SORTED ARRAY
//Time Complexity-> O (log(n))
//The maximum value for the array is---> 10*9; 
//let mid=low+(high-low)/2;(Works appropriately for every array data set )
//When low crosses the high it will return -1
//Random accessing is possible


console.log("Binary Search:");

let arr = [10, 22, 43, 45, 64, 76];
function binarySearch(arr, target) {
   console.log("The index of an searched element is:");
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor(low+(high-low)/2);
         console.log({low,high,mid,midVal:arr[mid]});
         
        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] < target) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return -1;
}
console.log(binarySearch(arr, 43));
console.log(binarySearch(arr, 64));
console.log(binarySearch(arr,54));
console.log(binarySearch(arr,8));
 

//to find the squarerrot of any number

function findSqrt(term){
    let left=0;
    let right=term;
    console.log({term});
    
    while(left<right){
        let mid=Math.floor(left+(right-left)/2);

        let square=mid*mid;
        if(square=== term){
            return mid;
        }
        if(square>term){
            right=mid-1;
        }else{
            left=mid+1;
        }
    }
    return -1;

}
console.log(findSqrt(81));
console.log(findSqrt(25));
console.log(findSqrt(15));


//The lower bound of a number x in a sorted array is the index of the first element that is greater than or equal to x.
//If element is not present then index is length of array
//If element is just smaller than given element in array then index of that lowerbound is 
console.log("To find the lowerBound:");
arr = [1,2,4,4,7,9];

function lowerBound(arr, target) {
    let low = 0;
    let high = arr.length;

    while (low <high) {
        let mid = Math.floor(low + (high - low) / 2);
        console.log({low,high,mid,midVal:arr[mid]});
        

        if (arr[mid] < target) {
            low = mid + 1; //
        } else {
            high = mid;
        }
    }
    return low;
}

console.log(lowerBound(arr, 4));
console.log(lowerBound(arr, 5));
console.log(lowerBound(arr, 10));
console.log(lowerBound(arr, 0));



//The upper bound of a number x in a sorted array is the index of the first element that is strictly greater than x
arr = [1,2,4,4,7,9];
function upperBound(arr, target) {
  let low = 0;
  let high = arr.length;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] <= target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;   
}











