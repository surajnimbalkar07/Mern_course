
//find longest subarray with sum k
function findLongestSubArray(array, k) {
  let map = new Map();  // optional: stores subarrays
  let maxLength = 0;

  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = i; j < array.length; j++) {
      sum += array[j];

      if (sum === k) {
        map.set(`${i}-${j}`, array.slice(i, j + 1)); // store subarray
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }

  return maxLength > 0 ? maxLength : 0;
}

// Example usage:
const array = [1, 2, 3, 2, 5, 1];
const k = 5;
console.log(findLongestSubArray(array, k)); // Output: 3 ([2,3] or [5])

//Time complexity: O(n²)

//---------------------------------------------------------------------------------

//count subarray with given sum
function countSubarrays(arr, targetSum) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];

      if (sum === targetSum) {
        count++;
        // Optional: store the subarray if needed
        // console.log(arr.slice(i, j + 1));
      }
    }
  }

  return count;
}

// Example:
const arr = [1, 2, 3, 2, 5];
const targetSum = 5;

console.log(countSubarrays(arr, targetSum)); // Output: 3

//Time complexity: O(n²)
//---------------------------------------------------------------------------------

/* find intersection and union */
let arr4=[1,2,4,5,6]; let arr5=[2,5,6,3,1,3];

function intersection(arr4,arr5){
    /* let ans=[];
    let set=new Set(arr4);
    let set2=new Set(arr5);
    
    for(let num of set2){
        if(set.has(num)){
            ans.push(num);
        }
    }
    return ans; */
    let intersection=[];
    let setArr4=new Set(arr4);

    for(let i=0;i<arr5.length;i++){
      if(setArr4.has(arr5[i])){
        intersection.push(arr5[i]);
      }
    }
    intersection = [...new Set(intersection)];
    //let intersectionSet = new Set(intersection);
    //intersection = [...intersectionSet]
    return intersection;
}

console.log(intersection(arr4,arr5).join(","));

function union(){
    const unionSet = new Set([...arr4,...arr5]);
    const unionArr = [...unionSet];
    return unionArr;
}

console.log(union(arr4,arr5));