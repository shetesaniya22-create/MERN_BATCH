/*.......................................SEARCHING.......................................*/

//return Boolean value
function linearSearch(arr,key){

    for(let i=0;i<arr.length;i++){
        if(arr[i]===key){
             return true;
        }
    }
    return false;
}

let arr=[2,3,5,7,9];
console.log(linearSearch(arr,5));

//To find 'e' in HELLO
function findChar(str,key){
    for(let i=0;i<str.length;i++){
        if(str[i]===key){
            return i;
        }
    }
    return -1;
}

let str="hello";
console.log(findChar(str,'e'));

//finding name in Array of Objects//

let users=[
             {id:1 ,name:"Saniya" , city:"Pune" , mail:"sanya@gmail.com"},
            {id:2 ,name:"Saniya" , city:"satara", mail:"sanya134@gmail.com"},
            {id:3 ,name:"Prachi" , city:"Mumbai", mail:"prachi1234@gmail.com"},
];

function findName(arr,name){
    for(let i=0;i<arr.length;i++){
        if(arr[i].name===name && (arr[i].id===1 || arr[i].id===2)){
            return arr[i];
        }
    }
return null;
}

console.log(findName(users,"Saniya"));



//---------------------------------------------//
let studentData = new Map();
studentData.set("Prachi", { age: 20 });
studentData.set("Saniya", { age: 21 });
studentData.set("Rucha", { age: 19 });
studentData.set("Veena", { age: 22 });

console.log(studentData.get("Veena"));
console.log(studentData.has("Veena")); 
console.log(studentData.delete("Veena"));
//console.log(studentData.clear());
console.log(studentData);



//----------------------------------------//
let myMap = new Map();
myMap.set("name", "John");
myMap.set("age", 30);

console.log(myMap.get("name")); // Output: John
console.log(myMap.has("age")); // Output: true
myMap.delete("age");
console.log(myMap.has("age")); // Output: false



//---------------------------------------------//
function frequencyCounter(){
    const freqMap=new Map();

    for(let num of arr){
        if(freqMap.has(num)){
            freqMap.set(num,freqMap.get(num)+1);
            
        }else{
            freqMap.set(num,1);
        }
    }
    return freqMap;
}

arr=[1,2,3,4,3,2,1];
console.log(frequencyCounter(arr));


//---------------COUNT OF CHARACTER-----------------------//

function wordFrequencyCounter(str){

    let freqMap=new Map();
    str = str.replace(/\s/g, "").trim();

    for(let s of str){
        if(freqMap.has(s)){
            freqMap.set(s, freqMap.get(s)+1);
        }else{
            freqMap.set(s, 1);
        }
    }
    return freqMap;
}

str="Hello World";
let str1="Welcome to AccioJob";
console.log(wordFrequencyCounter(str));
console.log(wordFrequencyCounter(str1));


/*SET------------>It only stores unique values.
                  Automatically removes duplicate values
*/


let fruits=new Set();
fruits.add("apple");
fruits.add("mango");
fruits.add("Dragon Fruit");
fruits.add("apple"); // Cannot add this in fruits as "apple" is already there

fruits.delete("apple");  //Delete the existing "apple" so only "mango" will print
console.log(fruits.has("mango"))   //Return the Boolean value if exist 
console.log(fruits);


//------------REMOVES THE DUPLICATE ELEMENTS FROM AN ARRAY------------------//
arr=[1,2,3,2,3,5,1,3,2];
console.log([...new Set(arr)]);   //Removes duplicate and return only unique element


//------------------------ANAGRAM (SILENT  && LISTEN )----------------------------------------//

function isAnagram(str1, str2){
     
    if(str1.length !== str2.length)  return false;

    return str1.split('').sort().join('')  === str2.split('').sort().join('');
}

str1="listen";
let str2="silent";
console.log(isAnagram(str1,str2));

/* TIME COMPLEXITY---> split== O(n)
                       sort==  O(n log n)
                       join==  O(n)
    
    Space Complexity---> split== O(n)
                         overall== O(n)
*/

//---------------------ANOTHER METHOD (Reduces Time & Space)-----------------------------//
/*-----------------------USING SET METHOD------------------------------------------------*/


function isAnagrams(str1, str2){
     
    if(str1.length !== str2.length)  return false;
    let frequencyCounter={};

    for(let ch of str1){
        frequencyCounter[ch]=(frequencyCounter || 0) +1;
    }

    for(let ch of str2){
        if(!frequencyCounter[ch]){
              return false;
        }else{
            frequencyCounter[ch]-=1
        }
    }
return true;

}

console.log(isAnagrams("listen","silent"));
console.log(isAnagrams("hello","world"));
console.log(isAnagrams("triangle","integral"));



