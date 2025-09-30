//-----------------------------HOF FUNCTIONS------------------------------

//write arrow function to check if number is divisible by 3 or not

const divisible= ( num)=> {
    
    if(num%3==0){
     return true;
    }else{
        return false
    }
}

console.log(divisible(9))
console.log(divisible(4))


//------------------------------------------------


const isDivisible= ( num)=>num%3==0? "true":"false"
console.log(isDivisible(9))

// How this keyword work for normal function vs arrow function

const student={
    name:"suraj",
    age:22,
    result1:function (status){
        console.log(this.name +" ", status+" the exam")
        console.log(this)
    } ,
    result2:(status)=>{
       console.log(this.name +" ", status+" the exam")  //arrow function doesnt have its own this so it will return undefined or 
                                                        //  will return window object in browser on calling this here
       console.log(this)
    }
}

student.result1("pass");
student.result2("fail")



//-----------------------------Higher Order Function-----------------------------
//forEach() in js
//it doesnt return anything

let arr=[2,1,4,5,6];
arr.forEach((value)=>{
    value*=2
    console.log(value)
})


//------------------------------------------------

let users=[
    {name:"ramesh",age:20},
    {name:"suresh",age:10},
    {name:"rani",age:40}
]

users.forEach((user)=>{
    console.log(user.name,user.age)
})

//------------------------------------------------

//map() in js:

//-transform the array
//-return an array
//-create new array doesnt change original array


//transform name of each user to uppercase

let capitalized=users.map((user)=>{
    return({name:user.name.toUpperCase(),age:user.age})
    
//    user.name=user.name.toUpperCase();  //this will modify original array
//     return user
})

// console.log(users)
console.log(capitalized)

//------------------------------------------------

//filter() in js
//-return an array
//-create new array doesnt change original array

let nums=[2,12,3,45,6];
let result=nums.filter((value)=>{
    return value%2 //will give value not divisible by 2 bcs it will return 0 ie falsy value 
})
console.log(result)

//------------------------------------------------
 
let names=["pranjal","uday","bhavesh","siddharth","neha"];
//filter names array in way that names less than 5 char are eliminated

let filterResult=names.filter((char)=> char.length>5)
console.log(filterResult)

