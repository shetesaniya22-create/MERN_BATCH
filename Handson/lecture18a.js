/*---------------BOUNDARY LEVEL ELEMENTS------------------ */


/* Boundary level elements means we have to print elements of first
row from left to right(0-n).

Then we have to print the elements of last column except the last element 
of first row (1-n).

Then we have to print the elements of last row in reverse manner except 
the last element of last row(n-2 to 1).

Then we have to print the first column element in reverse manner except 
the first element of last row and first element of first row(n-2 to 1 ).

But when we solve this problem we will consider the edge case also such as
if there exist only one row and one coloumn */

let mat=[[1,2,3,4],
         [2,3,4,5],
         [3,4,5,6]
        ];
/*let mat=[[1],
         [2],
         [3],
         [4]];*/

let n=mat.length;
let m=mat[0].length;

//Print first row of matrix
for(let j=0;j<m;j++){
    console.log(mat[0][j]);
    
} 

if(n===1) return;

//Print the last coloumn except the last element of first row
for(let i=1;i<n;i++){
   console.log(mat[i][m-1]);
   
}
if(m===1) return;

//print the last row in reverse manner except the last element of last row
for(let j=m-2;j>=0;j--){
    console.log(mat[n-1][j]);
    
}

//print the first coloumn except the first element of first row and last 
// row respectively.
for(let i=n-2;i>0;i--){
   console.log(mat[i][0]);
   
}


/*--------------------TRANSPOSE OF MATRIX------------------- */

/*For Transpose of matrix -->
  The rows are converted  to coloumns*/

   mat = [
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [3, 3, 3, 3],
  [4, 4, 4, 4]
];

n = mat.length;
m = mat[0].length;

let newMat = [];

for (let i = 0; i < n; i++) {
  newMat[i] = [...mat[i]];
}

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < m; j++) {
    [newMat[i][j], newMat[j][i]] = [mat[j][i], mat[i][j]];
  }
}

console.log("Transpose of matrix:");
for (let i = 0; i < n; i++) {
  console.log(newMat[i].join(" "));
}


/*------------Rotate Matrix By 90 Degree-------------------- */
mat=[
    [7,  2  ,3 ],
    [2  ,3  , 4],
    [5,  6 , 1 ]
];


n=mat.length;
m=mat[0].length;

let rot=[];
for (let i = 0; i < n; i++){
    rot[i]=[...mat[i]];
}

for (let i = 0; i < n; i++) {
    
    for (let j = 0; j < m; j++) {
        rot[j][n - 1 - i] = mat[i][j];
    }
}

console.log("Rotated matrix:");
  for (let i = 0; i < n; i++) {
    console.log(rot[i].join(" "));
  }
