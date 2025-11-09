// *
// **
// ***
// ****
// *****
function stareCasePattern(n) {
    for (let i = 0; i <= n; i++) {
        let result = "";
        for (let j = 0; j < i; j++) {
            result += "*"
        }
        console.log(result)
    }
    
}
stareCasePattern(5)

// *****
// ****
// ***
// **
// *
console.log(" ")
function invertedRightAngle(n) {
    for (let i = 0; i <= n; i++) {
        let result = "";
        for (let j = n; j > i; j--) {
            result += "*"
        }
        console.log(result)
    }
}
invertedRightAngle(5)



// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
function combineStareCasePattern(n) {
    for (let i = 0; i <= n; i++) {
        let result = "";
        for (let j = 0; j < i; j++) {
            result += "*"
        }
        console.log(result)
    }
    for (let i = 1; i <= n; i++) {
        let result = "";
        for (let j = n; j > i; j--) {
            result += "*"
        }
        console.log(result)
    }
}
combineStareCasePattern(5)


//     *
//    * *
//   * * *
//  * * * *
// * * * * *

function pyramid(n) {

    for (let i = 0; i < n; i++) {
        let result = "";
        for (let s = 0; s < n - i - 1; s++) {
            result += " "
        }
        for (let j = 0; j <= i; j++) {
            result += "* "
        }
        console.log(result) 

    }
}
pyramid(5)


// * * * * *
//  * * * *
//   * * *
//    * *
//     *
console.log(" ")
function reversePyramid(n) {


    for (let i = 0; i < n; i++) {
        let result = "";
        for (let s = 0; s <i; s++) {
            result += " "
        }

        for (let j = n; j > i; j--) {
            result += "* "
        }
        console.log(result)


        

    }
}
reversePyramid(5)

//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *
console.log(" ")
function diamondPyramid(n) {

//upper
    for (let i = 0; i < n; i++) {
        let result = "";
        for (let s = 0; s < n - i - 1; s++) {
            result += " "
        }
        for (let j = 0; j <= i; j++) {
            result += "* "
        }
        console.log(result) 

    }
//lower
   for (let i = 1; i < n; i++) {
        let result = "";
        for (let s = 0; s <i; s++) {
            result += " "
        }

        for (let j = n; j > i; j--) {
            result += "* "
        }
        console.log(result)


        

    }
}
diamondPyramid(5)

// 1
// 12
// 123
// 1234
// 12345
function numPattern(n){
    for(let i=1;i<=n;i++){
        let result="";
        for(let j=1;j<=i;j++){
            result+=j
        }
        console.log(result)
    }
}
numPattern(5)

function numRepeatPattern(n){
    for(let i=1;i<=n;i++){
        let result="";
        for(let j=1;j<=i;j++){
            result+=i
        }
        console.log(result)
    }
}
numRepeatPattern(5)

// 1
// 21
// 321
// 4321
// 54321

function descendingNum(n){
    for(let i=1;i<=n;i++){
        let result="";
        for(let j=i;j>0;j--){
            result+=j
        }
        console.log(result)
    }
}
descendingNum(5)

//  A
//  AB
//  ABC
//  ABCD
//  ABCDE
function alphaPattern(n){
    for(let i=0;i<n;i++){
       let alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        let result=" ";
        for(let j=0;j<=i;j++ ){
            result+=alpha[j]
        }
        console.log(result)
    }
}
alphaPattern(5)

console.log(" ")

//  A
//  BC
//  CDE
//  DEFG
//  EFGHI
function alphaPatternVariation(n){
    for(let i=0;i<n;i++){
       let alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        let result=" ";
        for(let j=i;j<=i+i;j++ ){
            result+=alpha[j]
        }
        console.log(result)
    }
}
alphaPatternVariation(5)
console.log(" ");

//  ABCDE
//  ABCD
//  ABC
//  AB
//  A
function alphaPatternDecrease(n){
    for(let i=n;i>=0;i--){
       let alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        let result=" ";
        for(let j=0;j<i;j++ ){
            result+=alpha[j]
        }
        console.log(result)
    }
}
alphaPatternDecrease(5)

//prime num in range

function Prime(num){
   for(let i=2;i<num;i++){
     let isPrime=true
    // if(num<=1)isPrime= false
    for(let j=2;j*j<=num;j++){
        if(i%j==0)isPrime= false
    }
    if(isPrime){
        console.log(i)
    }
   }
   


}

Prime(8)


function isPrime(num){
   if(num<2)return false;
   for(let i=2;i*i<=num;i++){
    if(num%i==0)return false
   }
   return true


}

console.log(isPrime(8));

// AAAAA
// BBBB
// CCC
// DD
// E
function abc(n){
    let alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(let i=0;i<n;i++){
    let result='';
    for(let j=0;j<n-i;j++){
        result+=alpha[j]
    }
    console.log(result)
}
}
abc(5)

function abcd(n){
    
    for(let i=0;i<n;i++){
    let result='';
    for(let s=0;s<i;s++){
        result+=" "
    }
    for(let j=0;j<n-i;j++){
        result+="* "
    }
    console.log(result)
}
}
abcd(5)


//     *
//    * *
//   * * *
//  * * * * 
// * * * * *
//  * * * *
//   * * *
//    * *
//     *
function abcde(n){
//upper

    for(let i=0;i<n;i++){
    let result='';
    for(let s=0;s<n-i-1;s++){
        result+=" "
    }
    for(let j=0;j<=i;j++){
        result+="* "
    }
    console.log(result)
    
}

//lower
for(let i=1;i<n;i++){
    let result='';
    for(let s=0;s<i;s++){
        result+=" "
    }
    for(let j=0;j<n-i;j++){
        result+="* "
    }
    console.log(result)
}
}
abcde(5)

// 54321
// 5432
// 543
// 54
// 5
function abcdf(n){
    
    for(let i=0;i<n;i++){
    let result='';
    // for(let s=0;s<i;s++){
    //     result+=" "
    // }
    for(let j=n;j>i;j--){
        result+=j
    }
    console.log(result)
}
}
abcdf(5)