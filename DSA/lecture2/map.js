//MAP---->Mapping the data using key-value pair

//To initialize map

let map=new Map();

//To add the elements in map
map.set("saniya",22);
map.set("komal",23);
map.set("vaishnavi",24);
console.log(map);

//by using key and values
console.log("keys:" ,map.keys());
console.log("Values:" ,map.values());


//To print key-val pairs using DESTRUCTURING
for(let [key,value] of map){
    console.log(`${key} ${value}`);
    
}


//-----------------------Functions in map-----------------//
console.log(map.has("saniya")); //true
console.log(map.has(4));  //false

// console.log(map.delete("saniya"));

//To clear complete map
// map.clear();


//To get value of key
console.log(map.get("saniya")); //22
console.log(map.get("Saniya"));

//To get all the keys of map
for(let keys of map.keys()){
    console.log("Keys are:",keys);
    
}

//To get the values of map
for(let values of map.values()){
    console.log("Values are:",values);
    
}

//By using ForEach 
map.forEach((key,value)=>{
    console.log(`${key} ${value}`);
    
});

//To convert map to array
console.log("To convert map to array:");

console.log(Array.from(map));

//Another method to initialize map

let dictionaryFruits=new Map([
    ["a", ["apple", "kiwi"]],
    ["b", [ "banana"]],
    ["g", ["grapes","guava"]]
]);

console.log(dictionaryFruits);

dictionaryFruits.set("d",["dragon fruit"]);
console.log(dictionaryFruits);

let sentence = "To check how many words are there in this sentence which has repeating word check check";

function countFreq(sentence){
    let arr = sentence.split(" ");  
    let counter = new Map();

    for (let word of arr) {
        if (counter.has(word)) {
            counter.set(word, counter.get(word) + 1);
        }else{
            counter.set(word,1);
        }
    }

    return counter;
}
let counter=countFreq(sentence)
console.log(counter);


//To print only repeating words 
for(let [key,value] of counter){
    if(value>1){
        console.log({key});
    }
}


//To find the given string is pangram or not
str="We promptly judged antique ivory buckles for the next prize";

function pangramORnot(str){
    let strs=str.toLowerCase();
    let sets=new Set();

    for(let ch of strs){
        if(ch>="a"  && ch<="z"){
            sets.add(ch);
        }
    }
    if(sets.size===26){
        console.log("Pangram");
        
    }else{
        console.log("Not pangram");
        
    }
}

pangramORnot(str)
