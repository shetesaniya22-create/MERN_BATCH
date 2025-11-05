

let obj1 = {
    age: 12,
    6: 90,
};

// by default all the keys are of string types, except keys of type integer.
console.log("age of obj", obj1[6]); // 90
console.log("age of obj", obj1["6"]); // 90
console.log("age of obj", obj1["age"]); // 12

/* Other way of creating an object */
let obj2 = new Object();
obj2.name = "Harman";
obj2.class = 10;

console.log(obj2);
/* Note: Obj1 and Obj2 are exactly same */

/*................... Copying objects............. */
/*copying obj1 in obj2
{ ...obj1 } is called the spread operator for objects.
It copies all properties from obj1 into a new object.*/
obj2 = {...obj1 }; 
console.log(obj2);

/* Spread operators in Objects and Arrays */
//in Arrays
let arr = [12, 10, 3, 19];
let arr2 = [arr]; //without using spread operator
let arr3 = [...arr]; //with using spread operator
console.log({ arr2, arr3 }); //arr2 and arr3 are not same

//in objects
let student1 = {
    age: 10,
    name: "Prashant",
};

let student2 = { student1 };
let student3 = {...student1 };

console.log({ student2, student3 });

let studentPersonalDetails = {
    age: 12,
    name: "Rani",
};
let studentAcademicDetails = {
    marks: 130,
    grade: "A",
};

//merging two or more objects using spread operator
let studentDetails = {
    ...studentPersonalDetails,
    ...studentAcademicDetails,
};
console.log({...studentDetails });



