// const car={
//     name:"Tata",
//     model:"Harrier",
//     speed:"40km/hr",
//     isRunning:function (){
//         console.log(`${this.name} is running`);
        
//     },
//     changeSpeed:function(){
//         console.log(`speed is ${this.speed}`);
        
//     }
   
// }

// function Car(name,model){
//     this.name=name;
//     this.model=model;
//     this.speed=speed;
    
// }
// //methods of car written in prototype

// Car.prototype.isRunning=function(){
//     this.speed>0?console.log("Running"):console.log("not running"); 
// }

// //changespeed
// Car.prototype.changeSpeed=function(newSpeed){
//     this.speed=newSpeed;
// }

// const Creta=new Car("creta","CR-234");
// Creta.isRunning();
// Creta.changeSpeed(30);
// Creta.isRunning();

// Car.prototype.printDetails=function(){
//     console.log(this.name,this.model,"with speed",this.speed);
// }
// Creta.printDetails()


// why we use class:

//In modern JavaScript, classes are preferred for object creation and inheritance because the syntax is cleaner. 
// Constructor functions and prototypes still work and are used in legacy projects, 
// but new projects usually use classes. Under the hood, class methods are stored on prototypes, so the concept is still relevant.
// when we create multiple prototypes they are not grouped so we use classes for them in general it groups prototypes and constructor
// classes cant be hoisted like functions u must declare it before calling
class Car{
    constructor(name,model){
        this.name=name;
        this.model=model;
        this.speed=0;

    }
    isRunning(){
        this.speed>0?console.log("running"):console.log("not running");
        
        
    }
    changeSpeed(newSpeed){
        this.speed=newSpeed
    }
}

const Tata=new Car("tata","harrier"); //this keyword will refer to tata
console.log({Tata});


//---------------------------------------------------------------

class Attendance{
    constructor(name,rollNo){
        this.name=name;
        this.rollNo=rollNo;
        this.days=0;
        
        this.total=0;

    }
    isPresent(){
        this.days=this.days+1;
        this.total=this.total+1;
        // console.log(this.days);
        
    }
    isAbsent(){
        
        this.total=this.total+1;
        // console.log(this.days);
        
    }
    totalAttendance(){
        
        const percent=(this.days/this.total)*100;
        console.log(percent);
        
    }
}
const student1=new Attendance("vishal",21);
student1.isPresent();
student1.isPresent();
student1.isPresent();
student1.isPresent();
student1.isAbsent();
student1.isAbsent();
student1.totalAttendance();


//--------------------------------------getters and setters in class------------------------------------------
class Student{
    constructor({id,name,dob,grade}){
        this.id=id;
        this.name=name;
        this._dob=dob;
        this.grade=grade;
        this._marks=0;

    }



get dob(){
    return this._dob  //it is read only property means if we apply it on any value we cant modify that value later
}
set marks(newMarks){
    set._marks=newMarks  //setters are used to set values and doesnt have return type, it require parameter
}
}
//both are used to protect data ,both getter and setter promotes encapsulation

const mukesh=new Student({
     id:"1234",
     name:"mukesh",
     dob:"24-12-1999",
     grade:10,
});
mukesh.dob="21-21-1999"
console.log(mukesh.dob);
// mukesh.marks=30;
// console.log(mukesh.marks);


//-------------------------------static methods----------------------------------------
//belongs to class and not objects

class User{
    constructor(username,role){
        this.username=username;
        this.role=role;
    }
   //static method
    static guest(){
        return new User("guest","guest");
    }
}

const guestUser=User.guest();
console.log(guestUser);


//------------------private properties-------------

class Bank{
    #pin=1234;
    constructor(firstPin){
        this.#pin=firstPin;
        this.balance=0;
    // console.log(this.#pin); //here we can access pin as it is inside

    }
    deposit(money){
        this.balance+=money

    }
    withdraw(userPin,money){
        return userPin===this.#pin && this.balance>money?(this.balance-=money):null

    }
    checkBalance(userPin){
        return userPin===this.#pin?this.balance:null

    }
}

//note:methods can be private also
const sbi=new Bank(4321);
sbi.deposit(150);
console.log(sbi.checkBalance(4321));
sbi.withdraw(4321,10);
console.log(sbi.pin);//unable to access value outside class as it is private
console.log(sbi["#pin"]);//unable to access value outside class 
console.log(sbi.checkBalance(4321));

//destructor hw