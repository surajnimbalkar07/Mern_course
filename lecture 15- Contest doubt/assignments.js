
/*

Given an unsorted array arr[] of N integers and a sum. The task is to count the number of subarrays which adds to a given number.

Try using map

Note: Use binary search to solve the problem

2
5 -10
10 2 -2 -20 10
6 33
1 4 20 3 10 5

 
 

Output

3
1
*/

function countSubarrays(arr, sum) {
    let map = new Map();
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        let addition = 0;
        for (let j = i; j < arr.length; j++) {
            // if (!map.has(sum)) {
            //     map.set(`${i}-${j}`, addition) -------------------> this is not necessary here as it will create one more key -value unnecessary
            // }
            addition += arr[j]
            if (addition == sum) {
                map.set(`${i}-${j}`, arr.slice(i, j + 1))  /*------->i have used `${i}-${j}` here because Different subarrays can have the same sum.

                                                            A Map only keeps one value per key → if you set the same key again, the old value is overwritten.*/
                count++
            }

        }
    }
    // console.log(map)------------->if u want map of subarrays whos sum is k
    return (count)
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
    inputArr.push(line);
    lineNumber++;
    if (lineNumber == 0) {
        size = parseInt(inputArr[0]);
    }

    if (lineNumber == 2 * size) {
        logic("s");
        readline.close();
    }
}

function logic(input) {
    const T = size;
    for (let i = 1; i <= T * 2; i = i = i + 2) {

        let N = parseInt(inputArr[i].split(" ")[0]);
        let X = parseInt(inputArr[i].split(" ")[1]);
        let Arr = inputArr[i + 1].split(" ").map((x) => parseInt(x));

        console.log(countSubarrays(Arr, X));
    }
}


//Q : find length of longest subarray with sum k as above

function findLongestSubArray(array, k) {
  let map=new Map();
  let result=[]
  for(let i=0;i<array.length;i++){
    let addition=0;
    for(let j=i;j<array.length;j++){
    addition+=array[j];
    if(addition==k){
      map.set(`${i}-${j}`,array.slice(i,j+1));
      result.push(map.get(`${i}-${j}`).length)
    }
  }
  }
  // console.log(map)
  
  return(result.length>0?Math.max(...result):"0")
}
function runProgram(input) {
  input = input.trim().split("\n");
  let T = +input[0];   // number of test cases
  let line = 1;

  for (let t = 0; t < T; t++) {
    let [N, K] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);

    console.log(findLongestSubArray(arr, K));
  }
}

// ---- For local testing ----
if (require.main === module) {
  const fs = require("fs");
  const input = fs.readFileSync(0, "utf-8"); // read from stdin
  runProgram(input);
}