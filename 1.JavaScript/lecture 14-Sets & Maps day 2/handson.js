
//find intersection of array using set
let arr7 = [1, 2, 3, 4, 5, 6];
let arr8 = [1, 2, 3, 5, 6, 7];

let intesection = new Set(arr7);
let intersectionArr = []
for (let i = 0; i < arr8.length; i++) {
    if (intesection.has(arr8[i])) {
        intersectionArr.push(arr8[i])
    }
}
console.log(...new Set(intersectionArr))  //spread operator will help to remove array brackets

//Maps for counting frequency

let list = [1, 2, 3, 4, 3, 4, 1, 3];
let newMap = new Map();

for (let i = 0; i < list.length; i++) {
    // If the number already exists in the Map
    if (newMap.has(list[i])) {
        // Increase its count by 1
        newMap.set(list[i], newMap.get(list[i]) + 1); //get will help to get value of key and increment it

    } else {
        // If number is not present, add it with count 1
        newMap.set(list[i], 1)
    }
}
console.log(newMap)

//remove duplicates from array and print unique array
let duplicateArr = [1, 2, 3, 2, 3, 4, 2, 4];
let uniqueArr = new Set(duplicateArr);
console.log([...uniqueArr]);


//finding frequency of word in given string
const para = "Hello how are you How was your day did you eat hoW did you find that";

let words = para.trim().toLowerCase().split(" ");
let wordFrequency = new Map();

for (let i = 0; i < words.length; i++) {
    if (wordFrequency.has(words[i])) {
        wordFrequency.set(words[i], wordFrequency.get(words[i]) + 1);
    } else {
        wordFrequency.set(words[i], 1);
    }
}

console.log(wordFrequency);
/*------------------------------------------------------------------------------------------*/ 
//ANAGRAMS:

let a = "silent";
let b = "listen";

function isAnagram(a, b) {
    if (a.length !== b.length) return false;

    let freq = {};

    for (let i = 0; i < a.length; i++) {
        freq[a[i]] = (freq[a[i]] || 0) + 1;
    }

    for (let i = 0; i < b.length; i++) {
        if (!freq[b[i]]) {
            return false;
        } else {
            freq[b[i]]--;
        }
    }

    return true; // If all counts match
}

console.log(isAnagram(a, b));  // true

/*----------------------------------------------------------------------------------------*/
function isAnagramMap(a, b) {

    if (a.length !== b.length) return false;
    let aFreq = new Map();
    let bFreq = new Map();

    for (let i = 0; i < a.length; i++) {

        aFreq.set(a[i], aFreq.get(a[i]) || 0 + 1)

    }
    for (let i = 0; i < b.length; i++) {

        bFreq.set(b[i], bFreq.get(b[i]) || 0 + 1)

    }

    for (let [key, value] of aFreq) {
        if (bFreq.get(key) !== value) {
            return false
        }
    }

    // for(let key of aFreq.keys()){
    //     if(aFreq.get(key)!==bFreq.get(key)){
    //         return false
    //     }
    // }

    return true;
}
console.log(isAnagramMap("silent", "listen"))

/*--------------------------------------------------------------------------------------------------*/
//RECURSION
//Q: recursion function to print 1 to n
function print1toN(n,start=1){
    if(n<start) return 
    
    console.log(start)
    print1toN(n,start+1)
}
print1toN(5)

//Q: print n to 1

function printNto1(n){
    if(n==0) return 
    
    console.log(n)
    printNto1(n-1)
}
printNto1(5)