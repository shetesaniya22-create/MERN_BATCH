//Anything you don't want to share between multiple instances of the same type then we cannot use prototype
// Constructor Functions & Instances > JS main.js

//default constructor function
function Config() {
    this.theme = "dark";
    this.value = "system";
}
let config = new Config();
console.log(config);

//parameterized constructor function
function Car(name, manufacturer, yearOfManufacture) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
    this.speed = 0;
    this.accelerate = function () {
        this.speed += 25;
    };
}

let car1 = new Car("WagonR", "Suzuki", 2026);
let car2 = new Car("i20", "Hyundai", 2025);

console.log(car1, car2);

console.log(JSON.stringify(car1));

car1.accelerate();

console.log(car1);

//what is object literal syntax?
//this is another way of creating objects in JS

function Counter(counterId, incrementId, decrementId) {
    this.count = 0;

    this.counterElement = document.getElementById(counterId);
    this.incrementButton = document.getElementById(incrementId);
    this.decrementButton = document.getElementById(decrementId);

    //method defined inside constructor function
    /*this.increment = function () {
        console.log(this);
        console.log("increment called");

        this.count++;
        this.renderCount();
    };

    this.decrement = function () {
        console.log("decrement called");

        this.count--;
        this.renderCount();
    };

    this.renderCount = function () {
        this.counterElement.textContent = this.count;
    };

    this.registerEvents = function () {
        console.log("register events called");

        this.incrementButton.addEventListener("click", () => {
            this.increment();
        });

        this.decrementButton.addEventListener("click", () => {
            this.decrement();
        });
    };*/
}

/* ---------- Instances ---------- */

//what happen what we use the new keyword?
//1. A new empty object is created
//2. The function is called with 'this' set to the new object
//3. The new object is linked to a constructor prototype
//4. The function automatically returns the new object

//to avoid memory wastage we can define methods on prototype
Counter.prototype.increment = function () {
    console.log(this);
    console.log("increment called");

    this.count++;
    this.renderCount();
};

Counter.prototype.decrement = function () {
    console.log("decrement called");

    this.count--;
    this.renderCount();
};

Counter.prototype.renderCount = function () {
    this.counterElement.textContent = this.count;
};

Counter.prototype.registerEvents = function () {
    console.log("register events called");

    this.incrementButton.addEventListener("click", () => {
        this.increment();
    });

    this.decrementButton.addEventListener("click", () => {
        this.decrement();
    });
};


let counter1 = new Counter("counterRef", "increment", "decrement");
console.log(counter1);
counter1.registerEvents();

let counter2 = new Counter("counterRef2", "increment2", "decrement2");
counter2.registerEvents();
console.log(counter2);

Counter.prototype.someNewMethod = function () {
    console.log("some new method called");
};

//diffrence between regular function and constructor function
//1.regular function perform some action and may or may not return a value
//constructor function creates and initializes an objects
//2.regular function this is not generally used
//in constructor function this refers to the newly created objects
//3.regular functionName(); // this is undefined in strict mode
//new constructorFunctionName(); // this is the newly created objects
//4.regular function expicit return function ussed to return value
//constructor function does not have an explicit return statement it returns the newly created object by default

//new keyword always creates a new object
//if we forget to use new keyword then this will be undefined in strict mode
//new keyword ensures that the constructor function is called in the context of a new object