/* -----------------OTHER METHODS FOR STRING--------------------- */

/*split()---> Gives the array of given string */
let str="Hello welcome to aaAcciojob";
console.log(str.split("")); //without any space whenever it will find no space that time it will split the given string
console.log(str.split(" ")); //whenever it find any void space it will split string that time
console.log(str.split("aa")); //whenever it find "aa" in a string it will split that string that time

/*Count the number of words from a string */
str="            Hello welcome to Acciojob            ";
console.log(str.trim().split(" ").length);

/* join() */
let arr=[1,2,3,4];
console.log("Sum of "+arr.join(" + ")+" is: ",10);

/* Given a string toggle its case */
function toggleCase(str){
    let toggleStr="";
    for(let i=0;i<str.length;i++){
        if(str[i]>="a"){
            toggleStr+=str[i].toUpperCase();     
        }else if(str[i]>="A"){
            toggleStr+=str[i].toLowerCase();
            
        }else{
            toggleStr+=str[i];
        }
    }
    console.log(toggleStr);
    
}
str="HelLo";
toggleCase(str);

console.log("Another method:  ");

function toggle(str){
     toggleStr="";
    for(let i=0;i<str.length;i++){
        if(str[i]===str[i].toLowerCase()){
             toggleStr+=str[i];
        }else if(str[i]===str[i].toUpperCase()){
             toggleStr+=str[i];
        }else{
            toggleStr+=str[i];
        }
    }
   console.log(toggleStr);
   
}
str="HelLo";
toggleCase(str);


console.log("Convert the given string to camelCase to snake_case: ");
function toSnakeCase(str){
    let snake_case="";
    for(let i=0;i<str.length;i++){
        if(str[i]===str[i].toUpperCase()){
            snake_case+="_"+str[i];
        }else{
            snake_case+=str[i];
        }
    }
    console.log(snake_case);
    
}
str="camelCase";
toSnakeCase(str);

/*console.log("Convert the given string to snake_case to camelCase: ");
function toCamelCase(str) {
    for(let i=0;i<str.length;i++){
        if(str[i]==="_"){

        }
    }
    
}*/

console.log("");

str="    How_are_you_in Jungle!  ";
console.log(str.trim().split("_"));
console.log(str.trim().substring(str.trim().indexOf("Jungle")+6));

/*Explore parseInt() and parsefloat() methods*/

/* Only use replace() Or replaceAll() method to and replace "in" with "on" in below string 
Note: Spain should be reman as it is*/

str="Hii are you in spain ,which city are you in pain?"
console.log(str.replaceAll("in","on").replace("spaon","spain"));
console.log(str.replaceAll(" in "," on "));
console.log(str.replace("in","on").replace("in","on").replace("spaon","spain"));

/*Write a function to check string is pallindrom or not*/
function pallindrome(str){
    str.trim;
    let rev="";
    n=str.length;
    for(let i=0;i<Math.floor(n/2);i++){
        if(str[i]!==str[n-1-i]) return false;
    
    }
    return true;

}
str="abacda";
let str1="abba"
console.log(pallindrome(str));
console.log(pallindrome(str1));

//Try finding the reverse of str and comapre the it with str,if they are same then pallindrome

/* Check if string is pallindrome or not , ignore cases ,ignore cases(upper/lower) and spaces */

function pan(str){
    let newStr=str.replaceAll(" ","").toLowerCase();

    let n=newStr.length;
   for(let i=0;i<Math.floor(n/2);i++){
    if(newStr[i]!==newStr[n-i-1]){
        return false;
    }
   }
  return true;
}
str="Nurses Run";
console.log(pan(str));

/*lastIndexOf()*/
console.log("stringMethodsring".lastIndexOf("s"));

/* write a function to find the first non repaeting character string
input-> "stringMethodsring"
output-->*/


function firstNonRepeatingChar(str){
    str=str.trim();
    n=str.length;
    
    for(let i=0;i<n;i++){
        if(str.lastIndexOf(str[i])===str.indexOf(str[i])){
            console.log("First non repeating character in :"+str[i]);
            break;
            
        }
       
}
    console.log("All the character are repeating");

}
str="stringMethodsring";
firstNonRepeatingChar(str);




function frequencyOfChar(str){
   let freq={};
   let n=str.length;

   for(let i=0;i<n;i++){
      freq[str[i]]=( freq [(str[i])] || 0)  +  1;

      
   }
   return freq;

}
str="ababdc";
console.log(frequencyOfChar(str));


/*HOMEWORK----------->  Write a function to find the frequency of each from the given string 
input-- "abd ghj abd ghi ghj abc abd 
output
abd =3*/

function countFrequencyOfWord(str) {
  let freq = {};
  let words = str.split(" ");

  for (let word of words) {
    freq[word] = (freq[word] || 0) + 1;
  }

  return freq;
}

str = "abd ghj abd ghi ghj abc abd";
console.log(countFrequencyOfWord(str));











/*obj= */

