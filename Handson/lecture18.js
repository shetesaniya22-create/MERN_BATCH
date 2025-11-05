/*----------------STRINGS ---------------------*/
/* Strings are IMMUATABLE */

let str="Hello I'm Saniya";

//Count the words in given string ----> By counting number of spaces so 
// the words are (space +1)

let count=0;
for(let i=0;i<str.length;i++){
    if(str[i]===" "){
        count++;
    }
}
console.log("There are "+(count+1)+" words in given string.");

console.log("There are "+(++count)+" words in given string.");


//----------------METHODS IN STRING------------------------//

/*INCLUDE()--> Checks if substring is present in string or not */
console.log("happiness".includes("ness"));
console.log("happiness".includes("ass"));
console.log("happiness".includes("Happi"));
console.log("happiness".includes("happi"));


/*REPLACE()-->Only changes the first value of the target string with new value 
that means if given letter existing more than one then it will only change
the letter whch occur first within a string*/
str="solo";
console.log(str.replace("s","d"));
console.log(str.replace("o","i"));
console.log(str);  //Doesn't change the original one


/* REPLACEALL()---> It will replace all the string where exist given character 
OR word with given*/
str="calculator";
console.log(str.replaceAll("l","m"));
console.log(str.replaceAll());

console.log(str); //Doesn,t change the original one 


/*TRIM()---> Removes the leading and trailing spaces only in a string */
str="       Enjoy your weekends.        ";
console.log(str.trim());
console.log(str);   //Doesn,t change the original one 

/* substring()---->Gives substrng from given specific index */
console.log("For substring() Method-------->");

console.log("hummingbird".substring(10));
console.log("hummingbird".substring(0,-7));
console.log("hummingbird".substring(-7));//convert -7 to zero so starts with zero index
console.log("hummingbird".substring(2,-8));// 2,0 so swap [0,2)

/* slice()---->(Same as a substring() but some diffrences) */
console.log("For slice() Method-------->");

console.log("temperature".slice(0,11)); //[0,11)
console.log("temperature".slice(-3)); //gives exactly three character from end
console.log("temperature".slice(6,-3));
console.log("temperature".slice(2,-4));

/*charAt()----->Gives value of given index */
console.log("cummins".charAt(4));
console.log("cummins".charAt(-4));

/*indexOf()--------> gives index of given value */
console.log("semiautomatic".indexOf("automatic"));
console.log("semiautomatic".indexOf("semi"));
console.log("semiautomatic".indexOf("auto"));
console.log("semiautomatic".indexOf("emi"));
console.log("semiautomatic".indexOf("c"));

/*repeat() */
console.log("aabbccdd".repeat(4));
console.log("aabbccdd".repeat(2.5));


/*toLowerCase()-------------> Convert string to lower case*/
console.log("AAbbCCdd".toLowerCase());

/*toUpperCase()-------------> Convert string to lower case*/
console.log("AAbbCCdd".toUpperCase());




//To print the substring of length 3
str="acciojob";

for(let i=0;i<str.length-3;i++){
   console.log(str.slice(i,[i+3]));
    
    
}





















