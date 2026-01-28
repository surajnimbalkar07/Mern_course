// console.log("start");
// const obj=new Promise((resolve)=>{
//   console.log("inside promise");
 
//   setTimeout(()=>{
//     resolve("we are done");
    
//   },0)
  
  
// })
// obj.then((msg)=>{
//     console.log(msg);
    
// })

//  console.log("end");
// async function fn(){
//      console.log("inside promise");
 
//   await setTimeout(()=>{
//     console.log("abc");
    
    
//   },0)
// }



console.log("A");
setTimeout(()=>{
    console.log(("B"));
    
},1000)

Promise.resolve().then(()=>console.log("C"));
console.log("D");

