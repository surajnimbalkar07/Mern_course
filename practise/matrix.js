


//multiplictaion of m*n and n*p matrix

let matrix1 = [
    [7, 8],
    [9, 10],
    [11, 12]
]; // 3x2 m*n


let matrix2 = [
    [1, 2, 3],
    [4, 5, 6]
]; // 2x3 n*p

//result will 3*3

let n = matrix1.length;       // rows of matrix1
let m = matrix1[0].length;    // cols of matrix1
let p = matrix2[0].length;    // cols of matrix2

// creating empty resulting matrix by filling all cell with 0


let result = [];
for (let i = 0; i < n; i++) {
    result[i] = [];
    for (let j = 0; j < p; j++) {
        result[i][j] = 0;
    }
}

// multiply
for (let i = 0; i < n; i++) {//iterate over rows of matrix1
    for (let j = 0; j < p; j++) {//iterate over columns matrix2
        for (let k = 0; k < m; k++) {//calculate corresponding multiply
            result[i][j] += matrix1[i][k] * matrix2[k][j];
        }
    }
}

console.log(result);



// Output: [ [ 39, 54, 69 ], [ 49, 68, 87 ], [ 59, 82, 105 ] ]