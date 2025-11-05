const { log } = require("node:console");

//Printing sum of all subarrays
console.log("Sum of all sub array is: ");
arr = [1, 2, 3, 4, 5, 6];
let n = arr.length;
let totalSum = 0;

console.log("Subarrays and their sums:");
for (let i = 0; i < n; i++) {
  let subArr = [];
  let subSum = 0;
  for (let j = i; j < n; j++) {
    subArr.push(arr[j]);
    subSum += arr[j];
    console.log(subArr.join(" "), subSum);
    totalSum += subSum;
  }
}

//To find the target sum from the subarray sum
console.log("To print the subarray whose sum is target sum  :");
arr = [1, 2, 3, 4, 5, 6];
 n = arr.length;
totalSum = 0;

console.log("Subarrays and their sums:");
for (let i = 0; i < n; i++) {
  let subArr = [];
  let subSum = 0;
  for (let j = i; j < n; j++) {
    subArr.push(arr[j]);
    subSum += arr[j];
    
    if(subSum==18){
    console.log(subArr.join(" "), subSum);
  }
}
}

//--------------------------NESTED ARRAYS------------------------------------//
/* arr[-1]..........arr["-1"]...........arr[1][2].length */
 n=5;
 let j;
for(let i=0;i<3;i++){
    let row=" ";
    for(j=1;j<=n;j++){
        row+=j+5*i+ " ";

    }
    console.log(row);
    
    
}

/*
 2D ARRAY----->  all rows must have the same number of columns. 
for(let i=0;i<arr.length;i++){
    let row=" ";
    for(let j=0;j<arr.length;j++){
        
    }
}
    Above 3 lines are same in all 2D arrays 
    arr=[ (0,0)(0,1)(0,2),
          (1,0)(1,1)(1,2)
          (2,0)(2,1)(2,2)
        ];
*/

// Printing 2D arrays -----------> arr[i][j]
console.log("Printinig 2D Array:  ");
arr=[
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
];

for(let i=0;i<arr.length;i++){
    let row=" ";
    for(let j=0;j<arr[i].length;j++){
        row+=arr[i][j]+" ";
    }
    console.log(row);

}

//PRINTING SUM IN 2D
console.log("Printinig sum in 2D Array:  ");
arr=[
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
];

for(let i=0;i<arr.length;i++){
    let sum=0;
    let row=" ";
    for(let j=0;j<arr[i].length;j++){
        
        sum+=arr[i][j];
           
    }
     console.log(sum);
    

}


console.log("Printing sum of total 2D Array:  ");
arr=[
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
];
let sum=0;

for(let i=0;i<arr.length;i++){
    
    for(let j=0;j<arr[i].length;j++)
        
        sum+=arr[i][j];
}
console.log(sum);


//Print the sum of product of elements of each even indexed row
console.log("Sum of product of even indexed row: ");

arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15]
];

sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (i % 2 !== 0) continue; 
  let product = 1; 
  for (let j = 0; j < arr[i].length; j++) {
    product *= arr[i][j];
  }
  sum += product;
}
console.log(sum);

//Print the coloms in rows 
/* 1 6 11
   2 7 12
   3 8 13
   4 9  14*/
console.log("Printing rows as a columns: ");

arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15]
];
n=arr.length;
for(let i=0;i<arr[0].length;i++){
    let row=" ";
    for(let j=0;j<arr.length;j++){
        row+=arr[j][i]+" ";
    }
    console.log(row);
    

}

//Printing diagonal element of an array
console.log("Printing Dagonal elements: ");

function printPrimaryDiagonal(arr){
    let n=arr.length;
    for(let i=0;i<n;i++){
        for(let j=0;j<arr[i].length;j++){
            if(i==j || (i==0 || j%2==0) ){
                console.log(arr[i][j]);
                
            }

        }
    }
}
arr=[[1,2,3],
     [4,5,6],
     [7,8,9]];
printPrimaryDiagonal(arr);

console.log("Printing the primary array & secondary array: ");

function printPrimaryyDiagonal(arr){
    let n=arr.length;
    for(let i=0;i<n;i++){
        for(let j=0;j<arr[i].length;j++){
            if(i==j || (i+j==n-1)) {
                console.log(arr[i][j]);
                
            }

        }
    }
}
arr=[[1,2,3],
     [4,5,6],
     [7,8,9]];
printPrimaryyDiagonal(arr);



console.log("Printing secondary and primary array: ");
function printSecondaryDiagonal(arr){
    let n=arr.length;
    let secondaryDiagonal=[];
    for(let i=0;i<n;i++){
        
                console.log(arr[i][n-i-1]);
                
            }

        }
arr=[[1,2,3],
     [4,5,6],
     [7,8,9]];
printSecondaryDiagonal(arr);




console.log("Printing Diagonal elements sum : ");

function printDiagonal(arr){
    let n=arr.length;
    let sum=0;
    for(let i=0;i<n;i++){
            
                
                sum+=arr[i][i];

        }
        console.log({sum});
        
        return sum%2==0?"Even":"Odd";
        
    }

arr=[[1,2,3],
     [4,5,6],
     [7,8,9]];
printDiagonal(arr);


console.log("Printing subarrays sum having length 3 : ");
arr = [1, 2, 3, 4, 5, 6];
 n = arr.length;
totalSum = 0;
for (let i = 0; i <= n - 3; i++) {
  let subArr = [];
  let sum = 0;
  for (let j = i; j < i + 3; j++) {
    subArr.push(arr[j]);
    sum += arr[j];
  }
  console.log(subArr.join(" "), sum);
  totalSum += sum;
}
console.log("Total sum:", totalSum);



let mat=[[1,2,3],
     [4,5,6],
     [7,8,9]];

     let m=3;
     n=3;

for(let i=0;i<m;i++){
    for(let j=0;j<n;j++){
      console.log(mat[i][j].join(" "));
    }
  }




















/*for(let j=0;j<arr[i].length;j++){
    let coloms;
    for(let i=0;i<n;i++){
       coloms+=arr[j]

    }
}*/




    

































//HOMEWORK------------->Find the optimse solution whose TC is O[N]