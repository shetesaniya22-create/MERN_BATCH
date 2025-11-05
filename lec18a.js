/* ----------- 1. PRINT BOUNDARY ----------- */
function printBoundary(mat) {
  let n = mat.length;
  let m = mat[0].length;

  console.log("Boundary elements:");

  // first row
  for (let j = 0; j < m; j++) console.log(mat[0][j]);

  // last column
  for (let i = 1; i < n; i++) console.log(mat[i][m - 1]);

  // edge cases
  if (n === 1 || m === 1) return;

  // last row
  for (let j = m - 2; j >= 0; j--) console.log(mat[n - 1][j]);

  // first column
  for (let i = n - 2; i > 0; i--) console.log(mat[i][0]);
}

let mat1 = [[1, 2, 3, 4]];
printBoundary(mat1);


/* ----------- 2. TRANSPOSE OF MATRIX ----------- */
/*
rot = [...mat] shares the same row arrays 
rot[i] = [...mat[i]] copies each row 
*/

function transposeMatrix(matrix) {
  let n = matrix.length;
  let newMat = [];

  // copy original
  for (let i = 0; i < n; i++) {
    newMat[i] = [...matrix[i]];
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [newMat[i][j], newMat[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  console.log("Transpose:");
  for (let i = 0; i < n; i++) {
    console.log(newMat[i].join(" "));
  }
}

let mat2 = [
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [3, 3, 3, 3],
  [4, 4, 4, 4],
];

transposeMatrix(mat2);



/* ----------- 3. ROTATE MATRIX 90 DEGREE ----------- */
function rotate90(mat) {
  let n = mat.length;
  let m = mat[0].length;

  // Step 1: Transpose
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < m; j++) {
      [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
    }
  }

  // Step 2: Reverse each row
  for (let i = 0; i < n; i++) {
    mat[i].reverse();
  }

  console.log("Rotated by 90°:");
  for (let i = 0; i < n; i++) {
    console.log(mat[i].join(" "));
  }
}


let mat3 = [
  [7, 2, 3],
  [2, 3, 4],
  [5, 6, 1],
];

rotate90(mat3);
