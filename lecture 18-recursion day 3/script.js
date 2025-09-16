/*
given parenthesis string consist of only "(" & ")"
*/
function isValidParenthesis(str) {
    let n = str.length;
    if (n % 2) return false;

    let open = 0;
    for (let i = 0; i < n; i++) {
        if (str[i] === "(") open++;
        else {
            if (open > 0) open--;
            else return false;
        }
    }
    if (open != 0) return false;
    return true
}
console.log(isValidParenthesis("(())"))
console.log(isValidParenthesis("(())("))
console.log(isValidParenthesis("(())(("))


//generate all possible parenthesis of length N
//TC--->O(2^N)
let parenthesis = [];

function generateParenthesis(n, str = '', index = 0, open = 0, close = 0) {

    if (open < close) {
        return
    }
    if (index == n) {
        if (open == close) {
            parenthesis.push(str);
        }
        return
    }


    generateParenthesis(n, str + "(", index + 1, open + 1, close);
    generateParenthesis(n, str + ")", index + 1, open, close + 1);
}
generateParenthesis(6);
console.log({ parenthesis });

//other approach 
// let parenthesis=[];

// function generateParenthesis(n,str='',index=0,open=0){

//     if(open<0){
//         return
//     }
//     if(index==n){
//         if(open==0){
//             parenthesis.push(str);
//         }
//         return
//     }


//     generateParenthesis(n,str+"(",index+1,open+1);
//     generateParenthesis(n,str+")",index+1,open-1);
// }
// generateParenthesis(6);
// console.log({parenthesis});


//


function allSwaps(str) {
    let results = [];
    let arr = str.split("");

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            // let temp = [...arr];               
            [arr[i], arr[j]] = [arr[j], arr[i]];
            results.push(arr.join(""));
        }
    }

    return results;
}

console.log(allSwaps("abc"));


//
let str = "abc";
let arr = str.split("");

function generateString(arr, i, n) {
    if (i === n) {
        console.log(arr.join("")); 
        return;
    }

    for (let j = i; j <= n; j++) {
       
        [arr[i], arr[j]] = [arr[j], arr[i]];
        generateString(arr, i + 1, n);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

generateString(arr, 0, arr.length - 1);

//
// function swapStr(str,i,j){
//     [arr[i], arr[j]] = [arr[j], arr[i]];
// }

// let strPermutations=[];
// function permutations(str,ind=0){
//    if(ind==str.length-1){
//      strPermutations.push(str);
//     return
//    }
//    for(let i=0;i<str.length;i++){

//    }
// }