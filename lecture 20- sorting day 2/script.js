//Merge two arrays
//using merge sort
//TC----->O(n+m)
let arr1=[1,3,4,7,10];
let arr2=[2,9,12]
function MergeSortedArray(arr1,arr2){
    let i=0;j=0;
    let merged=[];

    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            merged.push(arr1[i])
            i++
        }else{
            merged.push(arr2[j])
            j++
        }
    }
    while(i<arr1.length){
        merged.push(arr1[i]);
        i++
    };
    while(j<arr2.length){
        merged.push(arr2[j])
        j++
    }
    return merged
}
console.log(MergeSortedArray(arr1,arr2))


//using spread operator
function merge(arr1,arr2){
   let merged = [...arr1,...arr2];
console.log(merged.sort((a,b)=>a-b));
}
merge(arr1,arr2)

//Q: divide the arrays in two halfs recursively and sort them using merge sort
let arr=[3,7,1,5,8,2,4];
function mergeDivide(arr,low,high){
    // console.log(mid)
    if(low==high){
        return [arr[low]]
    }
    
   let mid=Math.floor((low+high)/2)
    let leftSort=mergeDivide(arr,low,mid);
    let rightSort=mergeDivide(arr,mid+1,high);

    let finalSort=MergeSortedArray(leftSort,rightSort)

return finalSort
    

}
console.log(mergeDivide(arr,0,arr.length-1))
// Initial call: mergeDivide(arr, 0, 6)

// low=0, high=6 → mid = 3
//will take array 0-3 then 4 -6
// Split array into [3,7,1,5] and [8,2,4]

// Recursively sort left half [3,7,1,5]:

// mid = 1 → split into [3,7] and [1,5]

// [3,7] → split into [3] and [7] → base case, then merge → [3,7]

// [1,5] → split into [1] and [5] → merge → [1,5]

// Merge [3,7] and [1,5] → [1,3,5,7]

// Recursively sort right half [8,2,4]:

// mid = 5 → split into [8,2] and [4]

// [8,2] → split into [8] and [2] → merge → [2,8]

// [4] → base case

// Merge [2,8] and [4] → [2,4,8]

// Merge left [1,3,5,7] and right [2,4,8] → [1,2,3,4,5,7,8]

//TC----------> O(nlogn)