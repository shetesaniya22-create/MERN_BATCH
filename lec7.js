//....................TERNARY OPERATOR..........................//
/* Ternary operator must have FALSE part*/


//to check number is even or odd
const numb=10;
numb%2==0 ? console.log("Even") : console.log("Odd");

const outputs=numb%2==0 ? "Even" : "Odd";
console.log(numb+" is the"+outputs);


//to check number is positive or negative
const numbs=-10;
numbs>0 ? console.log("Positive") :console.log("Negative");


//nested ternary operator
let a1=-20;
let R=a1>0 ? "Positive" :
 a1<0 ? "Negative" : 
 "Zero";
console.log(a1+" is a "+R+" number");


//To find higher mark and name of that person
let nam1="Ram";
let nam2="Shyam";

let m1=70;
let m2=30;

let higherNam=m1>m2 ? nam1 :nam2;
let higherMark=m1>m2 ? m1: m2;
console.log(higherNam+" having highest marks as "+higherMark);


//Multiple statements in ternary operators
m1>m2 ? (higherNam=nam1,higherMark=m1):
(higherNam=nam2,higherMark=m2);
console.log(higherNam+" having very highest marks as "+higherMark);

//to find greater number among three numbers
const n11=10;
const n12=208;
const n13=87;

const maxNum=n11>n12 && n11>n13 ? n11 : n12>n13 ? n12 : n13;
console.log("The largest number is "+maxNum);

//greater and smaller number among three usng max-min function
console.log(Math.max(n11,n12,n13));
console.log(Math.min(n11,n12,n13));


//days of week
const d=3;
const day=d==1?"Monday":
d==2?"Tuesday":
d==3?"Wednesday":
d==4?"Thursday":
d==5?"Friday":
d==6?"Saturday":
d==7?"Sunday":
"Invalid number";
console.log("The day is:"+day);


//To check person can vote or not
let age=19;
let canVoteOrNot=age>=18?"Can Vote" :"Cannot vote";
console.log(canVoteOrNot);

//To check half of given number is even or not
let num=27;
let evenOrOdd=((num/2)%2==0) ? "Number is even" : "Number is odd";
console.log(evenOrOdd);


//To check == vs ===
let a="34";
let b=34;
let c=34;


// == 
let equality=a==b? (a+" is equal to "+b):(a+" is not equal to "+b);
console.log(equality);
// ===
equality=a===b? (a+" is equal to "+b):(a+" is not equal to "+b);
console.log(equality);


//To check the grade of score
let score=50;
let grade=score>=80 ? "A+" :
score <80 && score>=60 ? "A":
score<60 && score>=50 ? "B" :
 "FAIL";
console.log(grade);

//To check the age for mature girl and boy
let agee=23;
let gender="Female";
let result=agee>18 && gender=="Female" ? "Mature Girl" :agee>18 && gender=="Male"? "Mature Boy": "Invalid Input"
console.log(result);

//To print the lucky draw number
let num1=12;
let winnerOrLoser=(num1==11 || num1==101) ? "Winner" :"Loser";
console.log(winnerOrLoser);


//To check loggedIn and Subscription for premium plan
let loggedIn=true;
let subscription=true;
let premiumOrNot=loggedIn && subscription ? "Premium user having premium access of content" : "Upgrade your plan";
console.log(premiumOrNot);


//To check number is good or not
let n1=89;
let goodOrBad=n1==17? "Number is good" : "Number is bad";
console.log(goodOrBad);

//To check number is pallindrome or not
let number=238;
let firstDigit=Math.floor(number/100);
let lastDigit=number%10;
let pallindrome=firstDigit==lastDigit? (number+" is pallindrome") : (number+" is not pallindrome");
console.log(pallindrome);


//To check number is decimal or not
let n=12.5;
let decimalOrInteger=(Math.floor(n)===n) ?(n+" is a integar"):(n+" is a decimal number");
console.log(decimalOrInteger);


//To check greatest number between two numbers
let num11=620;
let num12=67;
let greaterNum=num11>num12? (num11+" is greater than "+num12): (num12+" is greater than "+num11);
console.log(greaterNum);















