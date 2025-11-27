function greetMe(greet){
    console.log(greet+""+this.name);
    
}
const person={
    name:"vaibhav",
}
greetMe.call(person,"hello ")

//Calls the function with the specified object as the this value 
// and the specified rest arguments as the arguments

greetMe.apply(person,["Hey "])
//Calls the function with the specified object as the this value 
// and the elements of specified array as the arguments.

const greetPerson=greetMe.bind(person,"bye ")
greetPerson()

//dom element and class use them to apply above concept