//First Occurence Index

let k = 6
let arr = [5, 3, 4, 6, 7];
let n = arr.length;
let minIndex = 0

function recursion(arr, k, n, minIndex) {
    if (minIndex >= n) return 0;
    if (arr[minIndex] == k) return minIndex;
    return recursion(arr, k, n, minIndex + 1)

}
console.log(recursion(arr, k, n, minIndex))

//Recursion is when a function calls itself to solve smaller parts of a problem.
// It checks a base case first; if the base case is not met, it calls itself with smaller input.
// Once the base case is reached, the function returns values step by step, unwinding the call stack.
// A base case is essential to prevent infinite recursion.

//multiplication

let num = 5;
function recursion(n) {
    if (num <= 0) return 1;
    return num * recursion(num - 1)
}
console.log(recursion(num))

/*
✅ Time Complexity

O(n)
Because the function is called once for every
 value from n down to 0.

✅ Space Complexity

O(n)
Because every recursive call is stored 
on the call stack until the base case is reached.
*/

//fibonnacci

function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}
console.log(fib(5))
/*
🔹 Time Complexity

❌ O(2ⁿ) → exponential
Because each call splits into 2 new calls.

🔹 Space Complexity

🔸 O(n)
//if asked abouth nth fibonacci num

function fib(n) {
  // write code here
   if(n==1)return 0;
    if(n==2)return 1;

    return fib(n-1)+fib(n-2)
}

*/