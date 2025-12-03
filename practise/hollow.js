
//    ****
//   *    *
//  *      *
// *        *
// *        *
//  *      *
//   *    *
//    ****

let n=4;

for(let i=0;i<n;i++){
  let line="";
     for(let s=0;s<n-i-1;s++){
       line+=" "
     }
     if(i==0 ){
       for(let k=0;k<n;k++){
         line+="*"
       }
     }
     
     if(i>=1){
       line+="*"
       for(let space=0;space<n+(i-1)*2;space++){
         line+=" "
       }
       line+="*"
     }
 
   
  
  console.log(line)
}

for(let i=n;i>0;i--){
  let line="";
     for(let s=0;s<n-i;s++){
       line+=" "
     }
     
     
    if( i>1 ){
       line+="*"
       for(let space=0;space<n+(i-2)*2;space++){
         line+=" "
       }
       line+="*"
     }
    if(i<=1 ){
      for(let k=0;k<n;k++){
        line+="*"
      }
    }
   
  
  console.log(line)
}

