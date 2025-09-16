// function validParenthesis(str){
//     let arr1=[];
//     let arr2=[]
//     for(let ch of str){
//        if(ch=="("){
//         arr1.push(ch)
//        }else{
//         arr2.push(ch)
//        }
//     }
//     if(arr1.length===arr2.length){
//         return "valid"
//     }else{
//         return "invalid"
//     }
// }
// console.log(validParenthesis("()()()"))
// console.log(validParenthesis("()()()))"))
// console.log(validParenthesis("()()())"))
// console.log(validParenthesis(")))((("))

/*
given parenthesis string consist of only "(" & ")"
*/


function isValidParenthesis(str){

    let stack=[];
    for(let i=0;i<str.length;i++){
        if(str[i]=="("){
            stack.push(str[i])
        }else{
            if(stack.length==0){
                console.log("not valid");
                return
            }
            stack.pop()
        }
    }
    if(stack.length===0){
        console.log("is valid")
    }else{
        console.log("not valid")
    }
}
isValidParenthesis(")))(((")
isValidParenthesis("()()()")