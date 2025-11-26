
//square matrix multiply

let A = [
  [1, 2],
  [3, 4]
];

let B = [
  [5, 6],
  [7, 8]
];

let n = A.length;
let C = []; 

// initialize C with zeros
//n*n
for (let i = 0; i < n; i++) {
  C[i] = [];
  for (let j = 0; j < n; j++) {
    C[i][j] = 0;
  }
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      C[i][j] += A[i][k] * B[k][j];
    }
  }
}
console.log(C)
