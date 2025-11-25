const user1={
    name:"nivas",
    age:22,
    city:"satara",
    printDetails:function (){
        console.log(`${this.name} is living in city ${this.city}`);
        
    }
}
const user2={
    name:"raj",
    age:22,
    city:"delhi",
    printDetails:function (){
        console.log(`${this.name} is living in city ${this.city}`);
        
    }
}

const user3={
    name:"suraj",
    age:22,
    city:"pune",
    printDetails:function (){
        console.log(`${this.name} is living in city ${this.city}`);
        
    }
}
//Encapsulation:

// A constructor function bundles (encapsulates):
// properties
// behavior

function User(name,age,city){
    this.name=name;
    this.age=age;
    this.city=city;
    this.printDetails=function(){
        console.log(`${this.name} is living in city ${this.city}`);
        
    }
}

const user4=new User("ajay",20,"nashik")
//Using new with a constructor function creates an instance of an object — a core OOP concept.
console.log(user4);


// -When we call a constructor function normally, this refers to the global/window object.
// -But when we use the new keyword It  creates a new empty object and makes this point to that object instead of the global/window object.
// -Then all properties written inside the constructor are added to this new object.
// -at end it returns the newly created object 


//create an array of object using constructor


// Arrays
const names = ["raj", "shivam", "pratik", "priya"];
const age = [12, 32, 10, 13];
const city = ["mumbai", "delhi", "pune", "nashik"];

function User(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

const users = [];

for (let i = 0; i < names.length; i++) {
    const user = new User(names[i], age[i], city[i]);
    users.push(user);
}

console.log(users);



/*  Prototype */

// Prototype is an object in JavaScript from which other objects inherit properties and methods.
// If a property is not found on the object itself, JavaScript looks for it in its prototype.

// Find the output
function Test() {
    this.value = 10;
}

Test.prototype.value = 100;

const test = new Test();

console.log(test.value);   // 10  first it will search for value in its own object "test", its found there so we print it
delete test.value;         //then deleting value property from test object
console.log(test.value);   // 100  if test object itself doesnt have value property it will then search for it in prototypr of test , so if its found there we will print it
