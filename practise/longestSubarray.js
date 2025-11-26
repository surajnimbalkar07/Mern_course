let k = 15
let arr = [10, 5, 2, 7, 1, 9];
//we have to find subarrays with sum k and return the length of longest subarray with  sum k
let map = new Map()
let finalResult = []
for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
        sum += arr[j];
        if (sum == k) {
            let length = j - i + 1;

        }
    }
}
let max = 0
for (let values of map.values()) {
    if (values > max) max = values

}
console.log(max)
//it will take o(n)^3 as nested loop +slice method will take o(n)

//as we have to find only length of longest subarray we can done without hashmap and slice===>


let t = 15
let arr1 = [10, 5, 2, 7, 1, 9];
//we have to find subarrays with sum k and return the length of longest subarray with  sum k

let initialMax = 0

for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
        sum += arr[j];
        if (sum == t) {
            let length = j - i + 1; //formula to calculate length of subarray
            if (length > initialMax) initialMax = length

        }
    }
}


console.log(initialMax)
