
/*
   Nested loops:
   - Outer loop → controls rows (how many lines to print)
   - Inner loop → controls columns (what to print in each line)
   - Build a string → then print → repeat for each row
*/

let N = 6; // number of rows
let M = 5; // number of columns



//-------------- Rectangular Numbers 
// Prints numbers 1 to M in each row, repeated N times
for (let i = 0; i < N; i++) {
    let numString = ""; // will print one row
    for (let j = 0; j < M; j++) {
        numString += (j + 1) + "  "; // add number with spacing
    }
    console.log(numString);
}
/*
Output for N=6, M=5:
1  2  3  4  5
1  2  3  4  5
...
(repeated 6 times)

Time Complexity:
- Outer loop runs N times
- Inner loop runs M times
→ O(N * M)
*/



// Unused Inner Loop 
// This loop builds the string but doesn’t print it anywhere
// → No output (good reminder: always console.log at the right place!)
for (let i = 0; i < N; i++) {
    let numString = "";
    for (let j = 0; j < M; j++) {
        numString += (j + 1) + "  ";
    }
    console.log(numString);
}
// Time Complexity: O(N * M) but wasted (no visible output)



// Rectangle of Stars 
// Simple solid rectangle of '*' with N rows and M columns
for (let i = 0; i < N; i++) {
    let numString = "";
    for (let j = 0; j < M; j++) {
        numString += "* ";
    }
    console.log(numString);
}
/*
Output:
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
(6 rows total)

Time Complexity: O(N * M)
*/



//Right-angled Triangle (Stars) 
// Increases stars row by row
for (let i = 0; i < N; i++) {
    let numString = "";
    for (let j = 0; j < i; j++) {
        numString += "* ";
    }
    console.log(numString);
}
/*
Output:
(row 0 → empty line)
* 
* * 
* * * 
* * * *
(up to N-1 stars)

Time Complexity: O(N^2) → sum of 1+2+...+N
*/



//Number Triangle 
// Numbers increase along each row
for (let i = 1; i < N; i++) {
    let numString = "";
    for (let j = 1; j < i; j++) {
        numString += j + " ";
    }
    console.log(numString);
}
/*
Output:
(row 1 → empty line)
1
1 2
1 2 3
...

Time Complexity: O(N^2) (again triangular growth)
*/



//Inverted Number Triangle 
// Decreases row size step by step
for (let i = 5; i >= 1; i--) {
    let numString = "";
    for (let j = 1; j < i; j++) {
        numString += j + " ";
    }
    console.log(numString);
}
/*
Output:
1 2 3 4
1 2 3
1 2
1
(empty last row)

Time Complexity: O(N^2) (decreasing series still quadratic)
*/



// Inverted Star Triangle 
// Stars reduce row by row
for (let i = 5; i >= 1; i--) {
    let numString = "";
    for (let j = 0; j < i; j++) {
        numString += "* ";
    }
    console.log(numString);
}
/*
Output:
* * * * *
* * * *
* * *
* *
*

Time Complexity: O(N^2)
*/



//Alternate Inverted Stars -
// Another way → by subtracting i from N
for (let i = 0; i < N; i++) {
    let numString = "";
    for (let j = 0; j < N - i; j++) {
        numString += "* ";
    }
    console.log(numString);
}

/*
Output for N=6:
* * * * * *
* * * * *
* * * *
* * *
* *
*

Time Complexity: O(N^2)
*/
