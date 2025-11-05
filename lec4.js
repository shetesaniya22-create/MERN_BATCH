console.log("Hello world");
let a=4;
let b=6;
let c=a+b;
console.log(c);

console.log("Hello world");
const x=14;
const y=6;
const z=x+y;
console.log(z);

//multiplication
c = a * b;
console.log("a * b = " + c);

//division
c = b / a;
console.log("b/a = " + c);

c = -4 / 0;
console.log("-4 / 0 =", c);

c = 4 / Infinity;
console.log("4 / Infinity =", c);

//remainder -> %
c = a % b;
console.log("a%b = " + c);

const father_name="Sunil"; //const is used when something can never be changed
console.log("My father name is: "+father_name);

const brandName="Amazon";
console.log("Brand name is: "+brandName +2);

var x1="Saniya Sunil Shete";
console.log("My name is: "+x1);

const emptyVariable=5;
console.log("Empty variable is: "+emptyVariable);

let newVar;  //declaration
newVar="saniya"; //initialisation

let D="Saturday";
let d="Monday";
console.log("Days are: "+d + "  "  +D);

let date_of_birth=13;    //snake case
console.log(date_of_birth);


console.log(typeof brandName);
console.log(typeof a);

let l=true;
console.log(typeof l);

let p=5;
p=p+5;
p+=5;

p*=2;
console.log(p);

console.log("Hello" + "  " + "World")
console.log("Hello World",2)

let s="10";
console.log(s+2);
console.log(("s+2*4")+2);


const min=24;
const sec=min*60;
console.log("The converted value is: "+sec);

const number1 = 234;
//print last digit
const lastDigit = number1 % 10;
console.log("Last digit of", number1, "is", lastDigit);

//Question-find the second largest digit from number 
const num1=123;
const numWithoutLastDigit=Math.floor(num1/100);
const secondLastDigit=numWithoutLastDigit%10;
console.log(secondLastDigit);

const str="abc";
let result=str*2;
console.log(result);

//for calculating power we use in build math function
result=Math.pow(2,5);
console.log(result);

const num="123";
let r=num+2;
console.log(r);
let n=0.4+0.9;
console.log(n);


let g=-31%7; //positive dividend,positive remainder......negative dividend,negative remainder
console.log(g);

let k=2**4+12-6/3*3%3;   //according to precedance rule first power will calculated 
console.log(k);           //16+12-6/3*3%3.....16+12-2*3%3.....16+12-6%3.....16+12+0....28



//lecture 6_____23 August 

//for let and const if we will access variable 
let c23=7;
console.log(c23);

console.log(a1);
var a1=4; 

let c1=3*4+30/6*5**2;
console.log(c1);

let x12=3+3**4/3**2-3*4/6;
console.log(x12);

const y1=("123"+1)*2**2-21/7;
console.log(y1);

const z1="123"+5**5/25**2/5;
console.log(z1);

const z2="123"+5**5/25**2/5%5;
console.log(z2);

const dsl=4+"34"*" "/5; //convert the empty string to zero.....4+0/5.....4
console.log(dsl);


