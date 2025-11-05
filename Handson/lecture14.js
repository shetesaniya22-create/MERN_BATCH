//SUBARRAY PROBLEMS

const { format } = require("path");

let arr=[1,2,3,4,5,6];
let n=arr.length;

//---------->Printing the sum of all subarrays
console.log("Printing the sum of all sub arrays: ");
let totalSum=0;
for(let i=0;i<n;i++){
    let subArr=[];
    let subSum=0;
    for(let j=0;j<n;j++){
        subArr.push(arr[j]);
        subSum+=arr[j];
        console.log(subArr.join("  ")+"  " +subSum);
        totalSum+=subSum;  
        
    }
}

//To find the target sum from subarray sum
console.log("To print the subarrays whose sum is target sum: ");
arr=[1,2,3,4,5,6];
n=arr.length;
totalSum=0;
console.log("Subarrays & their sums: ");
for(let i=0;i<n;i++){
    let subArr=[];
    let subSum=0;
    for(let j=i;j<n;j++){
        subArr.push(arr[j]);
        subSum+=arr[j];
        if(subSum===12){
            console.log(subArr.join(" ")+" "+subSum);
            
        }

    }
}

//......................NESTED ARRAYS......................//

/* 1 2 3 4
   5 6 7 8
   9 10 11 12

    row=row+j+5*i  */
  
n=5;
 let j;
for(let i=0;i<3;i++){
    let row=" ";
    for(j=1;j<=n;j++){
        row+=j+5*i+ " ";

    }
    console.log(row);
}

//Printing 2D arrays -------->arr[i][j]

console.log("Printing 2D Array:  ");
arr=[
     [1,2,3,4,5],
     [6,7,8,9,10],
     [11,12,13,14,15]
    ];

for(let i=0;i<arr.length;i++){
    let row=" ";
    for(let j=0;j<arr[i].length;j++){
        row+=arr[i][j] +" ";
    }
    console.log(row);
    
}

//Sum of 2D array elements  
console.log("Printing sum of each row in 2D Array:  ");
arr=[
     [1,2,3,4,5],
     [6,7,8,9,10],
     [11,12,13,14,15]
    ];

for(let i=0;i<arr.length;i++){
    //let row=" ";
    let sum=0;
    for(let j=0;j<arr[i].length;j++){
        //row+=arr[i][j] +" ";
        sum+=arr[i][j];
    }
    console.log(sum);
    
}

//Printing the total_sum of 2D array---->
console.log("Printing totalSum of 2D Array:  ");
arr=[
     [1,2,3,4,5],
     [6,7,8,9,10],
     [11,12,13,14,15]
    ];

 sum=0;
 for(let i=0;i<arr.length;i++){
   
    for(j=0;j<arr[i].length;j++){
        sum+=arr[i][j];
        
    }
    
}
console.log(sum);

//Printing the sum of product of elements of each even indexed row
console.log("Printing the sum of product of even indexed row");

for(let i=0;i<arr.length;i++){
   let product=1;
    if(i%2==1)
        continue;
    for(j=0;j<arr[i].length;j++){
        product*=arr[i][j];

    }
    sum+=product;
}
console.log(sum);

//Print the coloms in rows
for(let i=0;i<arr[0].length;i++){
    let row=" ";
    for(let j=0;j<arr.length;j++){
        row+=arr[j][i]+"   ";
    }
    console.log(row);
}

//Printing the diagonal element of an array(Primary and Secondary)
console.log("Printing the diagonal element of an array: ");
arr = [
    [1, 2, 3],
    [6, 7, 8],
    [11, 12, 13]
];

 n = arr.length;
for (let i = 0; i < n; i++) {
    for(let j=0;j<arr[i].length;j++){
        if(i===j || i+j==n-1)
    
    console.log(arr[i][j]);
}
}

//Printing the primary and secondary using single FOR loop:
console.log("Printing the primary and secondary using single FOR loop:");
arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

n = arr.length;
for(let i=0;i<n;i++){
    if(i!==arr[i][n-i-1]){
        console.log(arr[i][i]);
        
    }
    
}













