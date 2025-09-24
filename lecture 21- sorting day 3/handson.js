function insertionSortArray(arr4) {

    let n = arr4.length
    for (let i = 1; i < n; i++) {
        let firstElementOfSortedArray = arr4[i];
        let indexToInsertAt = 0;
        let ind = i - 1
        for (let j = ind; j >= 0; j--) {

            if (arr4[j] > firstElementOfSortedArray) {
                arr4[j + 1] = arr4[j]
            } else {
                indexToInsertAt = j + 1;
                break;
            }
        }
        arr4[indexToInsertAt] = firstElementOfSortedArray;
        ind++


    }
    return arr4
}
let arr4 = [3, 1, 6, 2, 8, 7, 4];
console.log(insertionSortArray(arr4).join(" "));


/*------------------------------------------QUICKSORT--------------------------------------------------- */
//Q: just place last element of array in middle such a that smaller element than it will be at left and largest will be at right

let arr = [2, 7, 1, 5, 4, 3]
function QuickSortPlaceLastElement(arr) {
    let key = arr[arr.length - 1];
    let leftside = [];
    let rightSide = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= key) {
            leftside.push(arr[i])
        } else {
            rightSide.push(arr[i])
        }
    }
    console.log(leftside.concat(rightSide))
}

QuickSortPlaceLastElement(arr);
//here time complexity will be O(n) but pace complexity will be O(n) because we are using extra array

/*--------------------------------------------------------------------------------------------- */
//optimized solution with space O(1) i.e inplace

function placeLastElem(arr) {

    let n = arr.length;
    let key = arr[n - 1];
    let ind = 0
    for (let i = 0; i < n; i++) {
        if (arr[i] <= key) {
            [arr[i], arr[ind]] = [arr[ind], arr[i]];
            ind++

        }
    }
    return arr
}

console.log(placeLastElem(arr));


/*--------------------------------------------------------------------------------------------- */

// TC------------->O(nlogn)
function partionArray(arr, low, high) {
    let pivot = arr[high];


    let ind = low
    for (let i = low; i < high; i++) {
        if (arr[i] <= pivot) {
            [arr[i], arr[ind]] = [arr[ind], arr[i]];

            ind++
            // console.log(ind)
        }
        //  console.log(arr)

    }
    [arr[ind], arr[high]] = [arr[high], arr[ind]]
    //why we use this here if in before function placeLastElem(arr) we use only one swapping condition and not like this one outside loop?

    /* placeLastElem(arr) function only moves the last element (pivot) into its correct position relative to the rest of the array.
      There is no recursion; it only does one pass. That’s why it works fine for just one pivot movement. */

    return ind
}
function QuickSortRecursion(arr, low, high) {

    if (low < high) {
        let pi = partionArray(arr, low, high);

        QuickSortRecursion(arr, low, pi - 1);
        //   console.log(low,high)
        QuickSortRecursion(arr, pi + 1, high)
        // console.log(low,high)
    }
    return arr

}
console.log(QuickSortRecursion(arr, 0, arr.length - 1))

/*--------------------------------------------------------------------------------------------- */
const nestedArr = [
    [1, 3],
    [2, 1],
    [1, 2],
    [2, 4],
];

nestedArr.sort((a, b) => a[0] - b[0]);
console.log({ nestedArr });


/*--------------------------------------------------------------------------------------------- */
/* H.w: sort the above array according to first value and then according to second value 
output should be: 
[
  [1, 2],
  [1, 3],
  [2, 1],
  [2, 4],
]
*/
nestedArr.sort((a, b) => {

    if (a[0] === b[0]) {

        return a[1] - b[1];
    }
    return a[0] - b[0];
});

console.log(nestedArr);