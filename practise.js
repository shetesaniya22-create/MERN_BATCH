/* 
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
*/

for(let i=1;i<5;i++){
    let row="";
    for(let j=1;j<=5;j++){
        row+=j+" ";
    }
    console.log(row);
}


/*
* * * * * *
* * * * * *
* * * * * *
* * * * * *
* * * * * *
*/
for(let i=0;i<5;i++){
    let row="";
    for(let j=0;j<=5;j++){
        row+="* "
    }
    console.log(row);
}


/*
1
1 2
1 2 3
1 2 3 4
*/
for(let i=1;i<5;i++){
    let space="";
    for(let j=1;j<=i;j++){
        space+=j+" ";
    }
    console.log(space);
}
/*
*
* *
* * *
* * * *
* * * * *
*/

for(let i=0;i<=5;i++){
    space="";
    for(let j=0;j<i;j++){
        space+="* ";
    }
    console.log(space);
}
console.log();

/*
* * * * * *
* * * * *
* * * *
* * *
* *
*
*/
for(let i=5;i>=0;i--){
    let row="";
    for(let j=0;j<=i;j++){
        row+="* ";
    }
    console.log(row);
    
}
/*
A
B C
C D E
D E F G
E F G H I

*/

for(let i=0;i<6;i++){
    let row="";
    for(let j=0;j<i;j++){
        let char=65+((i-1+j)%26);
        row+=String.fromCharCode(char)+" ";
    }
   console.log(row);
}


for(let i=0;i<6;i++){
    let row="";
    for(let j=0;j<i;j++){
        let char=65+j;
        row+=String.fromCharCode(char)+" ";
    }
    console.log(row);
    
}


let rows = 5;

for (let i = 1; i <= rows; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        // First row, last row, first column, last column
        if (i === rows || j === 1 || j === i) {
            row += "*";
        } else {
            row += " ";
        }
    }
    console.log(row);
}

let arr=[1,2,3,4,5,6,7,8,9];
console.log("Find the absolute difference of sum of all odd and even elements:");
let evenSum=0,oddSum=0;

for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
       evenSum+=arr[i];
    }else{
        oddSum+=arr[i];
    }
}
console.log(Math.abs(evenSum-oddSum));

console.log("Slice Function: ");
console.log(arr.slice(1,4));
console.log(arr.slice(1));
console.log(arr.slice());
console.log({arr});

console.log("Splice Function: ");
console.log(arr.splice(1,3));
console.log(arr.splice(1));
console.log(arr.splice());
console.log({arr});

let array=[1,2,3,4,5]
for(let index in array){
    console.log(index);
}

console.log("To print the prefix sum using array:");
let sum=0;
let newArr=[];
for(let i=0;i<array.length;i++){
    sum+=array[i];
    newArr.push(sum)
}
console.log({...newArr});

console.log("To print the sum of an array using another method:");
sum=[];
sum[0]=array[0];
for(let i=1;i<array.length;i++){
    sum[i]=sum[i-1]+array[i];
    
}
console.log(sum);


console.log("Swapping of two number using third variable:");
let a=20;
let b=30;
let temp=a;
a=b;
b=temp;
console.log({a,b});


console.log("To print the missing number in a consecutive number array:");
array = [1,2,3,4,5,7,8,9];
let n = array.length + 1;
let sumOfNum = (n * (n + 1)) / 2;
sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}

let missingNum = sumOfNum - sum;
console.log("The missing number in an array is", missingNum);


//To concatenate multiple arrays
console.log("Using concatenate function:");
let arr1=[12,17,19,15,16];
let arr2=[13,18,14,20,21];
let arr3=[];
arr3=arr3.concat([...arr1],[...arr2]);
let sortedArr=arr3.sort((a,b)=>(a-b));
console.log(sortedArr);

//To print the sub arrays and their sums
console.log("Print the sub arrays:")
arr=[1,2,3,4,5,6,7];
 n=arr.length;
for(let i=0;i<n;i++){
    let subArr=[];
    for(let j=i;j<n;j++){
        subArr.push(arr[j]);
        console.log(subArr.join(" "));
        
    }
}


console.log("Print the subarrays and their sum:")
arr=[1,2,3,4,5,6,7];
n=arr.length;
let totalSum=0;
for(let i=0;i<n;i++){
    let subArr=[];
    let sum=0;
    for(let j=i;j<n;j++){
        subArr.push(arr[j]);
        sum+=arr[j];
        totalSum+=sum;
        console.log(subArr.join(" "), sum,totalSum);
        
        

}
}

/*             2D Array                   */
/*It is an array inside an array
It is mainly used to represent tables, matrices, grids, or board games.
 */
console.log("The 2D matrix is:");
let mat=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let m=mat[0].length;
for(let i=0;i<mat.length;i++){
    for(let j=0;j<m;j++){
       console.log(mat[i][j]);
        
    }

}

//printing sum in 2d arrays
arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
for(let i=0;i<arr.length;i++){
    sum=0;
    for(let j=0;j<arr[0].length;j++){
         sum+=arr[i][j];
         console.log(sum)
    }
    console.log({sum})
    
}

//To find the target sum from the sub array sum
arr=[
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
];
sum=0;
for(let i=0;i<arr.length;i++){
    if(i %2!==0) continue;
    let product=1;
    for(let j=0;j<arr[i].length;j++){
        product*=arr[i][j];
    }
    sum+=product;
  }
console.log({sum})

//Print the columns in rows
arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15]
];
n=arr.length;
for(let i=0;i<arr[0].length;i++){
    let row=" ";
    for(let j=0;j<arr.length;j++){
        row+=arr[j][i] +" ";
    }
    console.log(row);
    
}

//Printing the diagonal element of an array
console.log("Both diagonal elements");

function printBothDiagonals(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (i === j || i + j === n - 1) {
                console.log(arr[i][j]);
            }
        }
    }
}

printBothDiagonals(arr);


const array1 = [arr, 1, "85", "rty", [2, [4, 5]], 32];
const array2 = [
    [1, 2, 3],
    [2, 3, 4],
    [3, 4, 5, 6],
];
const array3 = [
    [1, 2],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
];
console.log(Array.isArray(array2));


arr=[1,2,3,4,5,6];
n=arr.length;
for(let i=0;i<Math.floor(n/2);i++){
   [ arr[i],arr[n-i-1]]=[arr[n-i-1],arr[i]]
}
console.log(arr.join(" "));

//Reverse each row of a nested array
arr=   [
          [1, 2],
          [2, 3, 4, 5],
          [3, 4, 5, 6],
        ];
n=arr.length;
for(let i=0;i<n;i++){
    let m=arr[i].length;
    for(let j=0;j<Math.floor(m/2);j++){
        [arr[i][j], arr[i][m-j-1]] =[arr[i][m-j-1],arr[i][j]]
    }
}
console.log({arr});

arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
for (let i = 0; i < arr.length; i++) {
    let sum=0;
     m=arr[0].length;
    for (let j = 0; j < m; j++) {
        sum+=arr[i][j];
        
    }
    console.log({sum});
    
    
}

arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
n=arr.length;
m=arr[0].length;
for (let i = 0; i <m; i++) {
    let sum=0;
    
    for (let j = 0; j < n; j++) {
        sum+=arr[j][i];
        
    }
    console.log({sum});
    
    
}
console.log("Diagonal sum");
arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
 n=arr.length;
for (let i = 0; i < arr.length; i++) {
    let sum=0;
     m=arr[0].length;
    for (let j = 0; j < m; j++) {
        if((i==j) || i+j == n-1){
             sum+=arr[i][j]
        }
        
    }
    
}
 console.log({sum});