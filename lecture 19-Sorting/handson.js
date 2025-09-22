// --------------------------------------------1.Bubble sort---------------------------------------------
// basic idea- swap adjacent element and after each iteration
// largest elment will be at the end of the array

//A=[4,1,3,7,5];
//A=[1,3,4,5,7]



let arr=[3,2,1]

function sortArr(arr){
  let result=arr.sort((a,b)=>a-b);
  console.log(result);
};

// sortArr(arr);
//using recursion

function sortArrRecursion(arr, n = arr.length) {
  
  if (n === 1) return arr;

  for (let i = 0; i <=n; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }

  return sortArrRecursion(arr, n - 1);
}

console.log(sortArrRecursion(arr));
// Time Complexity: O(n²)

// Space Complexity: O(n) (due to recursion)

//Bubble sort:


let arr1=[4,5,1,3,2];
function bubbleSort(arr1){
    for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr1.length-i-1;j++){
         if(arr1[j]>arr1[j+1]){
        [arr1[j], arr1[j+1]] = [arr1[j+1], arr1[j]];
        
     }
    }
    
}
return arr1;  
}
console.log(bubbleSort(arr1))
// Your current code does not have the swapped flag to detect if the array is already sorted.
// So even if the array is already sorted, the loops still run fully.

// Time Complexity: O(n²)
// Worst case: array is reverse sorted → every comparison swaps
// Best case: array already sorted → still O(n²) in this version (no early exit optimization)

// Space Complexity: O(1) → in-place sorting

//summary-->swap adj element if prev is> current;
//after each pass greatest element will be at the last position;
 

//HW: impliment best case solution of bubble sort with O(n)

function bubbleBestCase(arr1){
  let n=arr1.length;
  for(let i=0;i<n;i++){
    let swapped=false;
    for(let j=0;j<j-i-1;j++){
      if(arr1[j]>arr1[j+1]){
        [arr1[j], arr1[j+1]] = [arr1[j+1], arr1[j]];
        swapped=true;
      }
    }
    if(!swapped)break;
  }
  return arr1
}
console.log(bubbleBestCase(arr1))
// current code  have the swapped flag to detect if the array is already sorted.

// So  if the array is already sorted, the loops will not run will generate best case O(n).

//SO OVERALL:
// Best Case	O(n)	Only if optimized with swapped flag, array already sorted
// Average Case	O(n²)	Array in random order
// Worst Case	O(n²)	Array is reverse sorted


//HW-----> sort the array conatining negative value by maintaing separate array for positive and negative values 

let A = [4, 1, 3, 7, 5, -4, -2, -1];

//1,3,4,5,7
let ans = [];
function increaseSort(arr) {
  let posArr = [];
  let negativeArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      posArr[arr[i]] = 1;
    } else {
      negativeArr[Math.abs(arr[i])] = 1;
    }
  }

  for (let i = negativeArr.length - 1; i > 0; i--) {
    if (negativeArr[i] == 1) {
      ans.push(-i);
    }
  }
  for (let i = 0; i < posArr.length; i++) {
    if (posArr[i] == 1) {
      ans.push(i);
    }
  }
}

increaseSort(A);
console.log(ans)


/* -----------------------------------2.SELECTION SORT-------------------------------- 
basic idea: select the smallest element in the array and then 
place it at the starting of array
*/

function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;//will conside i th element as minimum

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; //update minimum if j is > than prev min
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; //if two elements are not same then make a swap
        }
    }

    return arr;
}


console.log(selectionSort(arr1)); 

// Best Case: O(n²)
// Average Case: O(n²)
// Worst Case: O(n²)

// Space Complexity: O(1) (in-place)

// (Selection sort always scans the remaining unsorted array, so it’s always O(n²))
// Selection Sort does not have a “best-case optimization” like bubble sort.
// Its time complexity is always O(n²), regardless of the input array.
