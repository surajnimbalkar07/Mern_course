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
let arr3 = [1, 4, 3, 7, 9]
let result3 = arr3.pop()
console.log(arr3)

//--------------------------------------------------------------------
//using slice but it will give removed element not array after deleting element it doesnt 
//change actual array

let arr2 = [1, 4, 3, 7, 9]
let result2 = arr2.slice(4)
console.log(result2)//=>  o/p=> [9]

let arr1 = [1, 4, 3, 7, 9]
let result = arr1.splice(4, 1)//(start,count)
console.log(arr1)
//op=> [1,4,3,7]


let Arr = [1, 2, 3, 4]
let ab = Arr.splice(0, 1)
console.log(Arr)


let input = [1, 2, 3, 4, 5];
for (let i = 0; i < input.length; i++) {
  input[i] = input[i + 1];


}
input.length = input.length - 1
console.log(input)
/*----------------------------------------------------------------------------------------------------*/
//Q:shift element to right

let input1 = [1, 2, 3, 4, 5];
let last = input1[input1.length - 1]
for (let i = input1.length - 1; i > 0; i--) {
  input1[i] = input1[i - 1];
}

input1[0] = last
console.log(input1)

// note: Never change future element thats why we used reverse array and not straight one

/*----------------------------------------------------------------------------------------------------*/
//Q:shift element to left
let arr = [1, 2, 3, 4, 5];
let lastElement = arr[0]
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i + 1];
}
arr[arr.length - 1] = lastElement
console.log(arr)

/*----------------------------------------------------------------------------------------------------*/

//write a function to rotate array right(clockwise) by k element
function rotateRight(arr, k) {
  const n = arr.length;


  for (let j = 0; j < k; j++) {
    const last = arr[n - 1];
    for (let i = n - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = last;
  }
  return arr;
}

console.log(rotateRight(arr, 2))
/*----------------------------------------------------------------------------------------------------*/

//write a function to rotate array left by k element





/*----------------------------------------------------------------------------------------------------*/

//Q: maximum sum from subarray

let Subarr;
Subarr = [1, 2, -3, 0, 1, -1, 1];
function maxSubarraySum(Subarr) {

  const n = Subarr.length;


  let maxSum = 0;
  let startIndex = 0;
  let endIndex = n - 1;
  for (let i = 0; i < n; i++) {
    let currentSum = 0;
    for (let j = i; j < n; j++) {
      currentSum += Subarr[j];
      if (currentSum > maxSum)
        maxSum = currentSum;
      startIndex = i;
      endIndex = j;
    }
  }
  console.log("max sum is from index:", startIndex, "to", endIndex, " is", maxSum)
  // return maxSum;
}


maxSubarraySum(Subarr)

/*----------------------------------------------------------------------------------------------------*/
//Q: count the no of subarrays whos sum is k
let inputArray = [1, 2, -3, 0, 1, -1, 1];
function maxSubarray(inputArray, k) {

  const n = inputArray.length;


  let count = 0;

  for (let i = 0; i < n; i++) {
    let currentSum = 0;
    for (let j = i; j < n; j++) {
      currentSum += inputArray[j];
      if (currentSum == k)
        count++
    }
  }

  return count;
}


console.log(maxSubarray(inputArray, 0))


/*----------------------------------------------------------------------------------------------------*/
//Q: find longest subarray whose sum is k and return its length
let inputArray1 = [1, 2, -3,0,1,-1,1];
function maxSubarrayLength(inputArray1, k) {

  const n = inputArray1.length;

   let maxLength=0;

 
  for (let i = 0; i < n; i++) {
    let currentSum = 0;
    
    for (let j = i; j < n; j++) {
      currentSum += inputArray1[j];
     
      if (currentSum == k){
          
        maxLength=Math.max(maxLength,j-i+1)
        
      }
        
    }
  }
  return maxLength;
}


console.log(maxSubarrayLength(inputArray1, 0));

/*----------------------------------------------------------------------------------------------------*/
//Question:WRITE A FUNCTION TO PRINT ALL SUBARRAYS OF SIZE K

let inputArray2 = [1, 2, -3,0,1,-1,1];
function totalSubarrayOfSizeK(inputArray2, k) {

  const n = inputArray2.length;

  let finalArr=[]
 
  for (let i = 0; i < n; i++) {
     let subArrays= [];
    for (let j = i; j < n; j++) {
      subArrays.push(inputArray2[j]);
      if (subArrays.length == k)
        finalArr.push([...subArrays])
     
    }
  }

  return finalArr;
}


console.log(totalSubarrayOfSizeK(inputArray2, 3))