//90 deg anticlockwise
//same for 270 deg clockwise

let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
    
    ]
    
function mat(matrix){
    let n=matrix.length;
    let result=[];//will store in it
    for(let i=0;i<n;i++){
        result[i]=[];
        for(let j=0;j<n;j++){
            result[i][j]=matrix[j][i]
        }
    }
    console.log("transpose: ",result)
    result.reverse()
    console.log("90 deg anticlockwise: ",result)
}    
 mat(matrix)


 //rotate by 180 deg

 //1.reverse each row in matrix
 //2.reverse row

 function rotateOneEighty(Mat){
   
    for(let row of Mat){
        row.reverse()
    }
    Mat.reverse()
    return Mat
 }
 let Mat = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
 console.log("180 deg: ",rotateOneEighty(Mat));
 

//Rotate Square Matrix 90° Clockwise (In-place, no extra space)

 function rotateSquare90(mat) {
    const n = mat.length;

    // Step 1: Transpose
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
        }
    }

    // Step 2: Reverse each row
    for (let i = 0; i < n; i++) {
        mat[i].reverse();
    }
    // for(let row of mat){
    //     row.reverse()
    // }

    return mat;
}

let squareMat = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(rotateSquare90(squareMat));
// Output: [[7,4,1],[8,5,2],[9,6,3]]


//rotating a rectangular matrix 90° clockwise using extra space:

let mat = [
    [1,2,3],
    [4,5,6]
];

function rotateRect90(mat){
    let n=mat.length;
    let m=mat[0].length;
    let result=[];
    for(let i=0;i<m;i++){
        let final=[];
        //it will help to get exact element
        for(let j=n-1;j>=0;j--){
            final.push(mat[j][i])
            
        }
        result.push(final)
    }
    console.log(result)
}
rotateRect90(mat)