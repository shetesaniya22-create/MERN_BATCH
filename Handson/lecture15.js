//Nested Array-----Matrix
let arr=[1,2,3,4,5];

const arr1=[arr,1,"85","rty",[2,[4,5]],32];

const arr2=[
             [1,2,3,4],
             [5,6,7,8],
             [2,3,4,5],
];

const arr3=[
            [1,2],
            [2,3,4,5],
            [3,4,5,6],
];

//Print the value 4 from arr1
console.log("The value 4 from arr1: ");
console.log(arr1[4][1][0]);

//To check array1 is ARRAY or NOT using [Array.isArray()] method
console.log("Check arr1 is ARRAY or NOT");
console.log(Array.isArray(arr1[4][1]));  //return TRUE

console.log("Check in arr1 is 4th indexed is ARRAY or NOT");
if(Array.isArray(arr1[4])){
    if(Array.isArray(arr1[4][1])){
        console.log("Print 4: ",arr1[4][1][0]);
        
    }
}

//Check if 2D nested array is MATRIX or NOT
function isMatrix(arr){
    if(!Array.isArray(arr)) return false;

    if(!Array.isArray(arr[0])) return false;

    let firstRowLength=arr[0].length;
    for(let i=0;i<arr.length;i++){
        if(arr[i].length!==firstRowLength) return false;
    }
  return true;
}

console.log("For arr1: ",isMatrix(arr1));
console.log("For arr2: ",isMatrix(arr2));
console.log("For arr3: ",isMatrix(arr3));
console.log("For arr: ",isMatrix(arr));


/*Function to reverse an array
input=[3,2,4,1,9]
output=[9,1,4,2,3]
*/
console.log("Reverse array method in JS:");
function reverseArr(arr){
    let n=arr.length;
   
    for (let i = 0; i < Math.floor(n/2);i++) {
        [arr[i],arr[n-i-1]]=[arr[n-i-1],arr[i]];
    }
    console.log(arr.join(" "));
    
}
reverseArr([3,2,4,1,9]);

/*Reverse each row n an nested 2D array
input: [
          [1, 2],
          [2, 3, 4, 5],
          [3, 4, 5, 6],
        ];

output: [
          [2, 1],
          [5, 4, 3, 2],
          [6, 5, 4, 3],
        ];
*/
console.log("Reverse the rows in a matrix: ");

function reverseRows(arr){
    let n=arr.length;
    for(let i=0;i<n;i++){
        let m=arr[i].length;
        for (let j = 0; j < Math.floor(m/2);j++) {
            [arr[i][j],arr[i][m-j-1]]=[arr[i][m-j-1],arr[i][j]]
        }    
    }
   console.log({arr});
   
}
let arr4=[
          [1, 2],
          [2, 3, 4, 5],
          [3, 4, 5, 6],
        ];
        
reverseRows(arr4);

/* H.W -> Reverse columns of a 2D matrix
 
input: [
          [1, 2, 3, 4],
          [2, 3, 4, 5],
          [3, 4, 5, 6],
        ]
output: 
  3 2 1
  4 3 2
  5 4 3
  6 5 4

explanation: 

actual array after reversing the colums will be
[
  [3, 4, 5, 6],
  [2, 3, 4, 5],
  [1, 2, 3, 4],
]
*/
console.log("Reverse Columns: ");

function reverseColumns(matrix){
    let row=matrix.length;
    let columns=matrix[0].length;
    for(let j=0;j<columns;j++){
        for(let i=0,k=row-1;i<k;i++,k--){
            [matrix[i][j], matrix[k][j]]=[matrix[k][j], matrix[i][j]];
        }
    }
    console.log({matrix});
    
}
let matrix = [
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
];

        
reverseColumns(matrix);



console.log("Reverse Matrix: ");
function reverseCols(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].reverse();  // reverse the row
    }

    // print the matrix
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(" "));
    }
}

matrix = [
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
];

reverseCols(matrix);
