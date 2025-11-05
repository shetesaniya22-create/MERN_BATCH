const { AsyncLocalStorage } = require("node:async_hooks");
const { log } = require("node:console");
//----------------------OBJECTS--------------------------------//

let mother={
  name:"Rekha",
  age:46,
  address:"Hinjewadi",
  city:"Pune"

};
let student={
  name:"Saniya",
  age:22,
  address:"Baner",
  city:"Pune"

};

mother.occupation="Job"; //occupation is not there,we can add it further also
mother.age=50;         //if we want to change the value, then we can update it also

console.log({mother,student});

let arr=[1,2,3];
console.log(typeof arr); //It gives output as OBJECT as type of array is object


/*Create a vehicle property that has following properties as:
 no. of seats ,top speed, mileage,no. of airbags*/

 let vehicle1={
  noOfSeats:10,
  topSpeed:200,
  mileage:60,
  noOfAirbags:5,
 };
 
 vehicle1.noOfSeats=20; //To update the number of seats in existing vehicle1

 vehicle1.colors=["White","Black","Grey"];//adding property in vehicle

 delete vehicle1.noOfAirbags;  //To delete the existing property in vehicle1

 /*To add the new object n existing one*/
 vehicle1.address={
  addressLine1:"Aria Tower",
  addressLine2:"Baner",
  city:"Pune",
  state:"Maharashtra",
 }
 console.log({vehicle1});
 console.log("Accessing a property that is not yet defined: ");
 
 console.log(vehicle1.name);// accessing a property that is not yet defined
 
 

let vehicles2 = 
  {
    name: "Thar",
    noOfSeats: 65,
    topSpeed: 180,
    mileage: 40,
    colors: ["white", "black", "Grey"],
    address: {
      addressLine1: "Aria Tower",
      addressLine2: "Baner",
      city: "Pune"
    },
  };
  /*Array of objects*/
  console.log("To print array of Objects: ");
  const vehicles=[vehicle1,vehicles2];
  console.log({vehicles});
  
/*let vehicle=[];
  console.log(vehicle[0].name); (WITHOUT ?)
  -->When we are trying to access it will throw error as vehicle[0] is undefined
 
  console.log(vehicle[0]?.name); (WITH ? i.e OPTIONAL CHAINING)
  -->When we are trying to access vehicle[0] ,it will give undefined */

console.log("Print the name and it's city from vehicle array: ");

for (let i = 0; i < vehicles.length; i++) {
  console.log("Name of vehicle:", vehicles[i]?.name);
  console.log("Name of the city:", vehicles[i]?.address.city);
}

// Accessing the "name" property using dot notation
console.log("vehicle1.name", vehicle1.name);

// Accessing the "name" property using bracket notation (works the same here)
console.log('vehicle1["name"]', vehicle1["name"]);

/* for....in loop in objects*/
console.log("Printing the vehicle1 object using for... in loop:  ");
for(let key in vehicle1){
  console.log(key+ " : "+vehicle1[key]);
}

//Object.keys(objName) gives the array of keys*/
const vehicleObjKeys=Object.keys(vehicle1);
const addressObjKeys=Object.keys(vehicle1.address);
console.log({vehicleObjKeys,addressObjKeys});

/*Object.values gives array of values*/
const vehicleObjValues=Object.values(vehicle1);
const addressObjValues=Object.values(vehicle1.address);
console.log({vehicleObjValues,addressObjValues});

//for.....of loop in array of objects
console.log("Printing the array of objects usng for....of loop: ");
for(let value of vehicles){
  console.log(value);
  
}

//Change the value of city to Mumbai if city is Pune (for....of loop)
for(let vehicle of vehicles){
  if(vehicle?.address?.city==="Pune"){
    vehicle.address.city="Mumbai";
  }
} 

let vehicle3 = {
  name: "XUV700",
  noOfSeats: 7,
  topSpeed: 180,
  currentSpeed: 100,
  mileage: 40,
  colors: ["white", "black", "grey"],
  address: {
    addressLine1: "Aria tower",
    addressLine2: "Baner",
    city: "Pune",
    state: "Maharashtra",
  },
  isRunning:function(){
    if(this.currentSpeed>0){
      console.log("XUV is running at speed: "+this.currentSpeed);   
    }else{
      console.log("XUV is not running");
      
    }
  },
};

vehicle3.isRunning();
vehicle3.currentSpeed=0;
vehicle3.isRunning();



/*--------IMPLEMENT THE RESUME MANAGEMENT SYSYTEM-------------*/

const resume = {
  name: "Saniya",
  email: "saniya@gmail.com",
  phone: "9962054322",
  skills: ["Javascript", "HTML", "CSS","Java","SQL"],
  workExperience: ["Softron"],
display:function(){
  
  console.log("Resume Details:");
    console.log("Name:", this.name);
    console.log("Email:", this.email);
    console.log("Phone:", this.phone);
    console.log("Skills:", this.skills.join(", "));
    console.log("Work Experience:", this.workExperience.join(", "));
},
addSkills:function(newSkill){
  this.skills.push(newSkill);
   
},
showSkills:function(){
  console.log("Skills:"+this.skills.join(", ")); 
}
};

resume.display();
resume.addSkills("Node.js");
resume.showSkills();














