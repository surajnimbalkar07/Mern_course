//---------------------QUESTION-------------------------------------
//delete element in way that subarray sum will be maximum

let arr = [1, -2, 2, 4];
function maxSumArray(arr) {
    let maxSum = 0
    let maxSumSubArray;
    for (let i = 0; i < arr.length; i++) {

        let sum = 0;

        for (let j = 0; j < arr.length; j++) {
            sum += arr[j]
            let bysum = sum - arr[i]
            if (bysum > maxSum) {
                maxSum = bysum
                // console.log(maxSum)
                maxSumSubArray = arr.filter((idx) => idx !== arr[i]);

                //other approach of filter
                //  result = arr.filter((_, idx) => idx !== i);------>actually filter first argument
                //is element while second one is index
                //and 3rd is array so if accesing index 
                //element argument should be empty

                // result=[...arr.slice(0,i),...arr.slice(i+1)]------->another way with slice
                // arr.splice(i, 1);----->this will remove target index but will mutate original array

            }

        }

    }
    console.log(maxSumSubArray);
    console.log(maxSum)
}
maxSumArray(arr)
//above solution has TC O(n^3)--->2 for loop and filter
// space is O(n)

//--------------optimize it in O(n^2)------------------------------------------
//-----------space O(n) due to filter------------------------------------------ 

function maxSumArrayOptimized(arr) {
    let currentSum = 0
    let total = arr.reduce((a, b) => a + b, 0);
    let maxSubarray;
    for (let i = 0; i < arr.length; i++) {
        let result = total - arr[i];
        if (result > currentSum) {
            currentSum = result;
            maxSubarray = arr.filter((_, ind) => ind !== i);

        }


    }
    console.log(maxSubarray);
    console.log(currentSum)
}
maxSumArrayOptimized(arr)

//--------------optimize it in O(n)------------------------------
//-----------space O(n) due to filter------------------------------------------   
function maxSumArrayOptimized1(arr) {
    let minIndex = arr[0]
    let total = arr.reduce((a, b) => a + b, 0);
    // let maxSubarray;

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] < minIndex) {
            minIndex = arr[i]

        }



    }
    let maxSubarray = arr.filter((x) => x !== minIndex);
    let maxSum = total - minIndex
    console.log(maxSubarray);
    console.log(maxSum)
}
maxSumArrayOptimized1(arr)