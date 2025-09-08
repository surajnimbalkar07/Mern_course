
//Q. function for camel case and snake case for given string

function camelCase(str){
    
let capitalize=false;
let result=''           //will store result in it
// for(let i=0;i<str.length;i++){
//     if(str[i]==" "){
//         let op=str[i+1].toUpperCase();
//         result+=op
//         i++
//     }else{
//         result+=str[i]
//     }
// }
for(let ch of str){
    if(ch===" "){
        capitalize=true;
    }else{
       result+=capitalize?ch.toUpperCase():ch.toLowerCase();
       capitalize=false;
    }
}
console.log(result)
}

function snakeCase(str){
    let result='';
    for(let ch of str){
        if(ch===" "){
            result+="_"
        }else{
            result+=ch.toLowerCase()
        }
    }

    // str.replaceAll(" ","_")  ...............simple one line approach
    // str.trim().replaceAll(" ","_") ..........trim will remove all trailored spaces at start or end
    console.log(result)

    
}
camelCase("student first name")
snakeCase("student first name")


/*---------------------------------------------------------------------------------------- */
//reverse string letter by letter
function reverseString(str){
   let op= str.split("").reverse().join("");
    console.log(op)
}
reverseString("student")


/*---------------------------------------------------------------------------------------- */

//reverse by word

function reverseStringByWord(str){
    let result=str.split(" ").reverse().join(" "); //we will split string to array according space 
                                                    // then reverse it and will then join by spaces 
    console.log(result)
}
reverseStringByWord("student is smart")


/*=-------------------------------------------------------------------------------------------------------------------------- */

//pallindrome string
function isPallindrome(str){
    for(let i=0;i<Math.floor(str.length/2);i++){
        if(str[i]!==str[str.length-i-1]){
            return false
        }
        return true
    }
}

console.log(isPallindrome("asa"))

/*=-------------------------------------------------------------------------------------------------------------------------- */

//largest word length in string

function largestWordString(str){
    let maxLength;
    let op=str.split(" ")
    for(let ch of op){
       maxLength=ch.length
    }
  console.log(Math.max(maxLength))
}
largestWordString("my name is surajjjj")


/*=-------------------------------------------------------------------------------------------------------------------------- */

//reverse words in string at place

function wordReversal(str){
    let result=str.split(" ")
    let finalStr="";
    for(let ch of result){
        
        finalStr+=ch.split("").reverse().join("")+" "
        
    }
 console.log(finalStr)
}
wordReversal("my name is suraj")

//-----------------------------------------------------------------------------------------------------

function largestWordInString (str) {
    str = str.trim();
    str = str.split(" ");
  
    let largestWord = str[0];
    for(let word of str){
      if(word.length > largestWord.length){
        largestWord = word;
      }
    }
  
    return largestWord;
  }
  
  function firstNonRepeatingCharacter (str) {
    str = str.trim();
  
    let n = str.length;
  
    for(let character of str){
      if(str.indexOf(character) === str.lastIndexOf(character))
        return character;
    }
  
    return "No repeating character";
  }