//........................IF_ELSE STATEMENT..............................//

//to check conditions we use conditional statements
let num=4;
if(num%2==0){
    console.log("even");
}else{
    console.log("Odd");
}

//to check person can vote or not
let age=24;
if(age>=18){
    console.log("can vote");
}else{
    console.log("cannot vote");
}

//To check half of any given number is even or not
let number=21;
//let halfNum=number/2;
if((number/2) %2==0){
    console.log("Even");
}else{
    console.log("Odd");
}

// for checkking == vs ===
let a="12";
let b=12;
let c=12;

if(a==b){   
    console.log("Both a and b has same value");
}

if(b==c){           
    console.log("Both a and c has same value and same datatype");
}

if(a===c){           // === checks condition strictly
    console.log("Both a and c has same value");
}

//to check score
let score=90;
if(score>=80){
    console.log("A");
}else if(score>=60){
    console.log("B");
}else if(score>=40){
    console.log("C");
}else{
    console.log("Fail");
}

//to check age and gender for mature girl or boy
let ages=24;
let gender="Female";

if(ages>=18 && gender=="Female"){
    console.log("Mature girl");
}else if(ages>=18 && gender=="Male"){
    console.log("Mature boy");
}

if(ages>=18){ //same example by using nested if
    if(gender=="Female"){
        console.log("Mature girl");
    }
    if(gender=="Male"){
       console.log("Mature boy");
    }
}

//print the lucky draw winner
let ticketNum=101;
if(ticketNum==11 || ticketNum==101){
    console.log("Winner");
}else{
    console.log("Loser");
}

//if a user is logged in and subscription then check condition
let loggedIn=true;
let subscription=true;
if(loggedIn && subscription){ //no need to write condition equal to true/false 
    console.log("Premium user having premium access of content");
}else{
    console.log("Upgrade your plan");
}

//to check if number is good or not
let nums=17;
if(nums!==17){
    console.log("Number is good");
}else{
    console.log("Number is bad");
}

//pallindrome or not
let numbr=121;
let firstDigit=Math.floor(numbr/100);
let lastDigit=numbr%10;

if(firstDigit==lastDigit){
    console.log("pallindrome")
}else{
    console.log("Not Palindrome");
}


//check the number is decimal or not
let n=12.5;
if(Math.floor(n)==n){
    console.log("Integer");
}else{
    console.log("Decimal");
}
if(n%1==0){
    console.log("Integer");
}else{
    console.log("Decimal");
}


let s=11.01;
console.log(Math.floor(s));//11
console.log(Math.ceil(s)); //12

//given two numbers find graeter number
let x=11;
let y=12;
let z;    //store the value in another variable "z"
if(x>y){
    z=x;
}else{
    z=y;
}
console.log(z);

//to get highest marks and name by using only one print statement
let name1="Ram";
let name2="Shyam";

let mark1=40;
let mark2=30;

let highMark;
let highMarkName;

if(mark1>mark2){
    highMark=mark1;
    highMarkName=name1;
}else{
     highMark=mark2;
     highMarkName=name2;
}
console.log(highMarkName+" having highest marks which is "+highMark);

//another method just by using single IF statement
let names1="Ram";
let names2="Shyam";

let marks1=70;
let marks2=30;

let highestMark=marks1;
let highestName=names1;

if(marks2>marks1){
    highestMark=marks1;
    highestName=names2
}
console.log(highestName+" having highest marks as "+highestMark);

//greatest number among three
let n1=20;
let n2=10;
let n3=65;
let maximum;
if(n1>n2 && n1>n3){
    maximum=n1;
    
}else if(n2>n3){
    maximum=n2;
}else{
    maximum=n3;
}
console.log("Maximum number is "+maximum);

console.log(Math.max(n1,n3));//by using built-in max function

console.log(Math.min(n1,n3));

console.log(Math.max(n1,n2,n3));  //by using built-in max function for three variables

console.log(Math.min(n1,n2,n3));













/* HOMEWORK: All the yesterdays problem */
//how to insert multiple statements in true/false part in ternary operator
//greater number among three using ternary operator and using built-function









  

  

  












