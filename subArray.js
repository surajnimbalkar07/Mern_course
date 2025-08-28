//Q: Print all the possible subarray
// 1
// 1,2
// 1,2,3
// 1,2,3,4
// 2
// 2,3
// 2,3,4
// 3
// 3,4
// 4

// let arr = [1, 2, 3, 4];
// let n = arr.length;

// for (let i = 0; i < n; i++) {
 
//   let sub = []; 
//   for (let j = i; j < n; j++) {
//     sub.push(arr[j]);
//     console.log(sub);
//   }
// }
//-----------------------------------------------------------------------------


//question: remove 9 in array 
let arr3=[1,4,3,7,9]
let result3=arr3.pop()
console.log(arr3)

//--------------------------------------------------------------------
//using slice but it will give removed element not array after deleting element it doesnt 
//change actual array

let arr2=[1,4,3,7,9]
let result2=arr2.slice(4)
console.log(result2)//=>  o/p=> [9]

let arr1=[1,4,3,7,9]
let result=arr1.splice(4,1)//(start,count)
console.log(arr1)
//op=> [1,4,3,7]


let Arr=[1,2,3,4]
let ab=Arr.splice(0,1)
console.log(Arr)


let input=[1,2,3,4,5];
for(let i=0;i<input.length;i++){
    input[i]=input[i+1];


}
input.length=input.length-1
console.log(input)
//-------------------------------------------------------------------------------------------
//Q:shift element to right

let input1=[1,2,3,4,5];
// let last=input1[input1.length-1]
// for (let i = input1.length - 1; i > 0; i--) {
//   input1[i] = input1[i - 1];
// }

// input1[0]=last
// console.log(input1)

//note: Never change future element thats why we used reverse array and not straight one

//---------------------------------------------------------------------------------------------
//Q:shift element to left

let lastElement=input1[0]
for (let i = 0; i <input1.length; i++) {
  input1[i] = input1[i+1];
}

input1[input1.length-1]=lastElement
console.log(input1)