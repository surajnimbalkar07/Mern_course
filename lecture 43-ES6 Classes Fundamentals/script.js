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


//why we use class:when we create multiple prototypes they are not grouped so we use classes for them in general it groups prototypes and constructor
//classes cant be hoisted like functions u must declare it before calling
// class Car{
//     constructor(name,model){
//         this.name=name;
//         this.model=model;
//         this.speed=0;

//     }
//     isRunning(){
//         this.speed>0?console.log("running"):console.log("not running");
        
        
//     }
//     changeSpeed(newSpeed){
//         this.speed=newSpeed
//     }
// }

// const Tata=new Car("tata","harrier"); //this keyword will refer to tata
// console.log({Tata});


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



