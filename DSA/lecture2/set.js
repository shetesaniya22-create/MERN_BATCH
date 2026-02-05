let set1=new Set([1,2,3,4,4]);
console.log(set1);


//To add the value in a set
set1.add(5);
set1.add(6);
set1.add(7);
set1.add(8);
console.log(set1);

//to check the element is present i a set or not-> has()
//Return the Boolean value
console.log(set1.has(6));
console.log(set1.has(10));

//To clear the set
// set1.clear();
// console.log(set1);


//To check the size of an set
console.log(set1.size);


//To convert the set into an array

/* By using SPREAD OPERATOR */
let arr=[...set1];
console.log(arr);

/* By using Array.from method */
console.log("By using Array.from method()");

console.log(Array.from(set1));

//Properties of SET
let set2=new Set([4,5,6,7,8]);

console.log("Union of two set:");
console.log(set1.union(set2));

console.log("Intersection of two set:");
console.log(set1.intersection(set2));




//To find the difference between 2 set
console.log("Diffrence between two set");

function differenceSet(set1,set2){
    let differenceSet=new Set(set1);

    for(let item of set1){
        
        differenceSet.delete(set1);
    }
 return differenceSet;
}

console.log(differenceSet(set1,set2));

//Union of two set
console.log("Union of two sets: ");

function unionSet(set1,set2){
    let unionSet=new Set(set1);
    for(let item of set2 ){
        set1.add(item);

    }
    return unionSet;

}
console.log(unionSet(set1,set2));

//Intersection of two set
function intersectionSet(set1,set2){
    let intersectionSet=new Set(set1);
    for(let item of set2){
        if(set1.has(item)){
            intersectionSet.add(item);
        }
    }
    return intersectionSet;
}
console.log("Intersection of two set is:",intersectionSet(set1,set2));

//By using spread operator-->Union of three set
let set3=new Set([1,2,3,4,4]);
let set4=new Set([4,5,6,7,8]);
let set5=new Set([8,9,10,11,12]);

const union=new Set([...set3,...set4,...set5]);
console.log("Union is: ",union);

let person1={
    name:"Saniya",
    city:"Pune"

}

let person2={
    name:"John",
    city: "Pune"

}

let personSet=new Set([person1,person2]);
console.log(personSet);

let personSet1=new Set([person1,person1]);
console.log(personSet1);

let personSet3=new Set([person1,{
    name:"Saniya",
    city:"Pune"

}]);
console.log(personSet3);


let setStr=new Set([..."firefox"]);
console.log(setStr);

let setStr1=new Set([..."Firefox"]);
console.log(setStr1);

//Entries
console.log(set3.entries());

console.log(set3.values());

console.log(set3.keys());



