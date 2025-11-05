// -----------------------STRINGS IN JS-------------------------------------//


//Count the number of words
let str="Hii I'm  Saniya";
let count=0;

for(let i=0;i<str.length;i++){
   if(str[i]===" ")
         count++;
}
console.log(count+1);
console.log(++count); //PRE-INCREMENT

//.....................METHODS IN STRING..........................//

/*  INCLUDES() --->Checks if substring is present in the string or not*/
console.log("baloon".includes("oo"));         //can serach for a string more than or equal to length 1
console.log("baloon".includes("ooN"));         //Return boolean value (CASE SENSITIVE)



/* REPLACE()--->Only replace the first value of the target string with new value */
str="shoes"
console.log(str.replace("s","d")); //Return the new string but doesn't change ORIGINAL one
console.log(str);



/* replaceAll() --->replace all the  occurence of target with new value*/
str="shows";
console.log(str.replaceAll("s","a"));  //Return the new string, doesn't change the original one
console.log(str);



/* TRIM()  */
//str="Hii I'm  Saniya";
console.log("     Hii I'm Saniya         ".trim());//removes the leading 


//substring()-------->gives a substring
console.log("prajwal".substring(2)); //gives substring from 2 to last index

console.log("prajwal".substring(2,5)); //gives substring from 2 to 4 | [2,5] [2,6)

console.log("prajwal".substring(-2));  //for negative index it will convert it in 0

console.log("prajwal".substring(5,2)); //swap the index [2,5)

console.log("prajwal".substring(6,-2)); //swap index [0,6)



/* --------------   SLICE() ---------------------------  (Almost same as SUBSTRING but some difference )*/
console.log("acciojob".slice(2));  //[2,n)

console.log("acciojob".slice(-2)); //gives exactly 2 character from end

console.log("acciojob".slice(4,-2)); //Starts from index 4 and leaves last 2 characters  ()

console.log("acciojob".slice(-7,-2));  //Starts from 7th element from an end and ends before the last two elements 

console.log("abcd".repeat(4)); //gives same string as given input without spaces



/* ----------------charAt()----------------------------------- (Gives value of particular index)*/
console.log("vscode".charAt(3));


/*---------------------- indexOf()--------------------------------------*/
console.log("stringMethodsring".indexOf("ring"));
console.log("stringMethodsring".indexOf("ring",7));


/*.................toLowerCase()................................... */
console.log("AbCd".toLowerCase());

/*-------------------------toUppercase()---------------------- */
console.log("abCDef".toUpperCase());


//To print the substring of length 3
console.log("By using slice() method: ");
str="acciojob";
for(let i=0;i<str.length-3;i++){
    console.log(str.slice(i,[i+3]));
     
    
}

//By using substring method
console.log("By using substring() method: ");
str="acciojob";
for(let i=0;i<str.length-3;i++){
    console.log(str.substring(i,[i+3]));
    
}
console.log("abcd".__proto__); //Consoles the wrapper object details














