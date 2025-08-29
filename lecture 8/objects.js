// const name="piyush",
// const age=18,


const studentObj = {
    name: "suraj",
    age: "18",
    address: "pune",
    class: 12

}

const parentObj = {
    name: "riya",
    age: 35,
    address: "pune"
}
console.log(studentObj.age)//dot notation
console.log(studentObj["name"])//bracket notation

//updating values
studentObj.name = "suraj"
console.log(studentObj["name"])

//delete
delete studentObj.class

//adding

studentObj.id = 1

console.log(studentObj);

//--------------------------------------------------------------------------------------------------------


//create a person object with name , age , city and add hobby, update city

const personObj = {
    name: "raj",
    age: 18,
    city: "pune",

}

personObj.hobby = "singing";
personObj["city"] = "nagpur";
console.log("age of person is", personObj["age"]);
console.log(personObj);
console.log(personObj.address);//will give op as undefined
// console.log(personObj.address.area);//will give error because we cant access properties of undefined

console.log({ ...personObj, ...parentObj }) //combing two object inside one object
console.log([{ ...personObj, ...parentObj }]) //combining two object inside array

//Nested Objects:
const employeeObj = {
    name: "raj",
    salary: "10lpa",
    address: {
        city: "pune",
        area: "wakad",
        pincode: 412101
    }
}
console.log(employeeObj.address.city)

//Array of Objects
const studentObjArr = [
    studentObj, {
        name: "pulkit",
        age: 24,
        class: 11

    }

]
console.log(studentObjArr) //will print array of objects with studentObj and new object created here


//Accessing keys and value in objects
//1.looping on object

for (let i in studentObj) {
    console.log(i, ":", studentObj[i])
}


//2. using default method
console.log(Object.keys(studentObj))
console.log(Object.values(studentObj))
/*------------------------------------------------------------------------------------------------------------------------------ */
//Q: create array of objects with 4 students and print name age and houseno of student if city =="pune" 

const classRoom=[
    {
    name: "Suraj",
    age: 21,
    gender: "Male",
    grade: 12,
    address: {
      line1: "123",
      line2: "Near Library",
      city: "pune",
      houseNo: 45
    }
  },
  {
    name: "Sahil",
    age: 21,
    gender: "Male",
    grade: 12,
    address: {
      line1: "123",
      line2: "Near Library",
      city: "pune",
      houseNo: 66
    }
  },
 {
    name: "Rahul",
    age: 19,
    gender: "Male",
    grade: 12,
    address: {
      line1: "Green Lane",
      line2: "Near School",
      city: "Banglore",
      houseNo: 89
    }
  },
  {
    name: "raj",
    age: 23,
    gender: "Male",
    grade: 11,
    address: {
      line1: "road 123",
      line2: "beside hospital",
      city: "mumbai",
      houseNo: 47
    }
  },
]

classRoom.forEach((student)=>{
    if(student && student.address && student.address.city=="pune"){

        console.log("name of student with city pune is", student.name,"and there age is", student.age,"House no is",student.address.houseNo)
       
    }
})
//USING FOR IN LOOP
// for(let i in classRoom){
//     let student=classRoom[i]
//     if(student.address && student.address.city=="pune"){
//         console.log(student.name,"," , student.age)
//     }
// }


//USING FOR OF LOOP

// for(let i of classRoom){
    
//     if(i.address && i.address.city=="pune"){
//         console.log(i.name,"," , i.age)
//     }
// }


// Will not work directly on object

// studentObj.forEach((student)=>{
//     console.log(student.name )
// })

/*------------------------------------------------------------------------------------------------------------------------------ */

//this Keyword
//each object has its own this keyword
//mostly used inside function in objects

const carObj={
    car:"mercedes",
    color:"black",
    speed:20,
    run:()=>{
        console.log(this.speed)
        return 5;
    }
}
carObj.run()

//create object with name and skills

const portfolio={
    name:"piyush",
    skills:["c++","javaScript","MERN"],
    allSkills:function skillList(){
        for (let i of this.skills){
            console.log(i,",")
        }
        
    },
    addNewSkill:function addSkill(skillName){
        this.skills.push(skillName)
        
        console.log(this.skills.toString())//as we want skill in one line without array
    }
}
portfolio.allSkills()
portfolio.addNewSkill("java")