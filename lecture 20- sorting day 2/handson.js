// Merge Sort is a divide-and-conquer sorting algorithm that:

// Divides the array into two halves until each sub-array has only one element.

// Conquers by merging those sorted halves back together in order.

//Q: combining two arrays in one in sorted way
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

//Merge Sort recursively breaks the array into smaller parts and then combines them in sorted order, giving a consistent O(n log n) performance.
//Merge sort needs extra arrays to hold the merged halves during the combine step, and that’s why its space complexity is O(N).
//TC------->O(n log n)
//Space---->O(n)

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


//---------------------------------------INSERTION SORT------------------------------------------------
// It takes each element from the unsorted portion
//  and inserts it into the correct position within the already sorted portion of the array, 
//  shifting larger elements one step to the right to make space.

// Time: O(n²) worst/average, O(n) best (already sorted).

// Space: O(1) (in-place)


let array=[12,11,13,5,6];

function insertionSort(array){
    for(let i=1;i<array.length;i++){
        let key=array[i];

        let j=i-1;

        while(j>=0 && array[j]>key){
           
                array[j+1]=array[j];
                j--;
                
            
           
        }
       
        array[j+1]=key // it is used to place key on its correct position
    }
    return array
}
console.log(insertionSort(array))



//ip=[1,2,7,9,6]

function insertionSortArray(arr3){
    let n=arr3.length
    let key=arr3[n-1];
    let j=n-2;

    while(j>=0 && arr3[j]>key){
        arr3[j+1]=arr3[j];
        j--
    }
    arr3[j+1]=key;
    return arr3
}

let arr3=[1,2,7,9,6]
console.log(insertionSortArray(arr3))

