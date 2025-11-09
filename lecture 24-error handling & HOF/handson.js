const students = [
  { name: "Ravi", marks: [45, 55, 60] },
  { name: "Anjali", marks: [30, 40, 35] },
  { name: "Neha", marks: [70, 80, 90] },
  { name: "Aman", marks: [50, 45, 55] }
];

/*
Filter out students whose average marks are less than 50.
From the remaining students, extract only their names in uppercase.
Combine all the uppercase names into a single comma-separated string.

*/

students.forEach((student)=>{
    let avg=student.marks.reduce((a,b)=>a+b,0);
    student.average=avg/student.marks.length
})


//task 1: Filter out students whose average marks are less than 50.

let studentAverageFilter = students.filter((student) => student.average > 50);
console.log(studentAverageFilter);

//task 2:From the remaining students, extract only their names in uppercase.

let namesInUpperCase=studentAverageFilter.map((student)=>{
    let names=student.name.toUpperCase()
    return names
})

//task 3: Combine all the uppercase names into a single comma-separated string.

console.log(namesInUpperCase.join(","))

