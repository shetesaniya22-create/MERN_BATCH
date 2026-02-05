

function fullName(){
    console.log(`${this.fname} ${this.lname}`);
}

let person={
    fname:"Saniya",
    lname: "Shete",
}

fullName.call(person);


//Function Borrowing -->call method
// 1.Call lets you use a method of one object for another object

// 2.Useful when objects don’t share the same methods

const person2={
    fname:"prachi",
    lname:"",

}

class Persons{
    fname="suhani"
    lname="patil"

    printfullName() {
        return `${this.fname} ${this.lname}`;
    }
}
const persons=new Persons();
console.log(persons.printfullName());
console.log(persons.printfullName.call(persons));

//Apply Method










//Bind function ------>
//1. Bind is a method on functions.
//2. You can set this context
//3. Multiple params can be passed using comma seperated values
//4. The value for the  newFunction always remain fixed whenever newFunction is called


//HW--->Find out which pattern is created using BIND method