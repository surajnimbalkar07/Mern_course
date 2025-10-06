//recursive function to find sum of natural no:
let sum=0
function sumNaturalNum(N){
    if(N<=0)return sum;
    sum+=N;
    return sumNaturalNum(N-1);
    // return N+sumNaturalNum(N-1)
}
console.log(sumNaturalNum(5))
//----------------------------------------------------------------------------------------------------------------
//recursion function to print GCD of two numbers
//gcd is largest no that divides given two numbers
/*
gcd(9,15)=>3;
gcd(0,20)=>20;
gcd(8,32)=>8

*/
function Gcd(a,b){
 while(a!==0){
    let temp=a
    a=b%a;
    b=temp;
   
 }
  console.log(b)
}
Gcd(8,32)
Gcd(10,16)
Gcd(0,20)
Gcd(25,15)

//----------------------------------------------------------------------------------------------------------------
//using recursion
function GcdRecursion(a,b){
    if (a==0) return b;
    let temp=a               //----->optional
    return GcdRecursion(b%a,temp)  //also---> return GcdRecursion(b%a,a)
}
console.log(GcdRecursion(8,32))
console.log(GcdRecursion(15,25))
//we can also solve this without using temp ,just pass b%a & a in parameter
//eg:  return GcdRecursion(b%a,a)
//-------------------------------------------------------------------------------------------------------------------
//gcd of more than 2 num-->gcd(a,b,c)=gcd(gcd(a,b),c)=gcd(a,gcd(b,c))=gcd(b,gcd(a,c))
//gcd of an array

let arr=[27,12,18,24,30];
let gcdArr=0;

for(let i=0;i<arr.length;i++){
    gcdArr= GcdRecursion(gcdArr,arr[i])
}
console.log(gcdArr)


//fibonacci series
//note: if have to calculate nth term in series---->(N-1)th+(N-2)th

//time and space cants be >10^7 as it can cause time limit problems 

function fibonacci(n){
    if(n==0)return 0;
    if(n==1)return 1;

    return fibonacci(n-1)+fibonacci(n-2)
}
console.log(fibonacci(6))
 

//binary exponentiation----a^b

//write function to find power of a raised to b

function exponentNumber(a,b){
    let result=1;
    for(let i=0;i<b;i++){
        result*=a
    }
    return result;
}
console.log(exponentNumber(2,3))  //----------------->TC: O(b);


//approach1
function exponentNumberRecursive(a,n){
    if(n==0) return 1;
    return a*exponentNumberRecursive(a,n-1)
}
console.log(exponentNumberRecursive(2,5))

//
function exponentNumberRecursive1(a,n){
    if(n==0)return 1;
    if(n==1)return a;
    let temp=exponentNumberRecursive1(a,Math.floor(n/2));
    return temp*temp*a**(n%2);
}
console.log(exponentNumberRecursive1(5,15))