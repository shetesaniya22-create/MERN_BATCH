// JSON--->JavaScript Object Notation

//Object literal syntax
const data = {
  "name": "Saniya",
  "age": 22,
  "isStudent": true,
  "skills": ["JavaScript", "HTML", "CSS"],
  "address": {
    "city": "Pune",
    "state": "Maharashtra"
  }
};

console.log(data);

console.log(JSON.stringify(data));


localStorage.setItem("theme","dark");
localStorage.getItem("theme");

localStorage.setItem("username","Saniya");
localStorage.setItem("password","122434");
//read the value and put it in form
