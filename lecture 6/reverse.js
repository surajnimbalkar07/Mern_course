const arr2 = [
  [1, 2, 3, 4, 5, 6],
  [2, 6, 12, 43, 3, 5],
  [8, 10, 34, 23, 12, 8],
];
//output: 2 6 10 4 43 23 6 5 8

function printOddColElements(arr) {
  let rows = arr.length;
  let cols = arr[0].length; // since arr2 is a matrix

  // jo constant hai vo bahar wale loop m aaega
  for (let j = 0; j < cols; j++) {
    let ans = [];
    if (j % 2 == 0) continue;
    // jo change ho raha hai vo andar wale loop m aaega
    for (let i = 0; i < rows; i++) {
      ans.push (arr[i][j]);
    }
    for(let c=0;c<rows;c++){
        arr[c][j]=ans[rows-1-c]
    }
    return arr;
  }
}

printOddColElements(arr2);