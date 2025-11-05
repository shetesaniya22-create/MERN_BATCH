/*---------------OBJECTS------------------------------*/
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

//To add new property
mother.occupation="Job";
console.log("Adding new property in object MOTHER: ",{mother});

//To change the value of existing property
mother.city="Hyderabad";
console.log("Change the value of property: ",{mother});

console.log({student,mother});


console.log("Check the type of an array:  ");
let arr=[1,2,3,4];
console.log(typeof {arr});

/*Create a vehicle property that has following properties as:
 no. of seats ,top speed, mileage,no. of airbags*/

 let vehicle1={
    noOfSeats:50,
    topSpeed:180,
    mileage:60,
    noOfAirbags:5,
 };

 //To change the no. of seats
 vehicle1.noOfSeats=45;
 console.log({vehicle1});

 //To add new property in existing object
vehicle1.color=["White","Black","Grey"];
 console.log({vehicle1});
 
//To add new object in existing one
console.log("Add new object in existing one: ");

vehicle1.address={
    addressLine1:"Cummins College Road",
    addressLine2:"Karvenagar",
    city:"Pune",
    state:"Maharashtra",

};
console.log({vehicle1});

//Accessing the property that is not yet defined
console.log("Accessing property that is not yet defined:-> ",vehicle1.name);


let vehicle2={
    name:"Skoda",
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

//Array of objects:
console.log("ARRAY OF OBJECTS:");
const veh=[vehicle1,vehicle2];
console.log({veh});

console.log("Print the name and it's city from vehicle array: ");
for(let i=0;i<veh.length;i++){
    console.log("Name of vehicle",veh[i]?.name);
    console.log("Address of vehicle",veh[i]?.address);
    
}

//Accessing vehicle1 name which is undefined using dot operator
console.log("Vehicle1 name: ",vehicle1.name);


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






