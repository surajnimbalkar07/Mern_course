// let marks=prompt("enter marks of subject")
let marks=[50,60,30,78,90]

let totalMarks=500;
let sum=0;
function Average(){
     
     for( let i=0;i<marks.length;i++){
          sum+=marks[i];
          
     }
     console.log(`Total marks are ${sum}`);
     
     console.log(`Average of Marks are ${sum/marks.length}`)
}

function Grade(){
  let percentage= (sum/totalMarks)*100;
  console.log(`Grades are ${percentage}`);
  
}

Average();
Grade();
