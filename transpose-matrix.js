// Given a 2D integer array matrix, return the transpose of matrix.
// The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]

// Example 2:
// Input: matrix = [[1,2,3],[4,5,6]]
// Output: [[1,4],[2,5],[3,6]]

// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 1000
// 1 <= m * n <= 105
// -109 <= matrix[i][j] <= 109

var transpose = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  if(m === 1){
    let res = []
    for (let i = 0; i < n; i++) {
      res.push([matrix[0][i]])
    }
    return res
  }
  if (m > n) {
    let arr = new Array(m - n).fill("x");
    for (let i = 0; i < m; i++) {
      matrix[i] = [...matrix[i], ...arr];
    }
  }
  if (n > m) {
    for (let i = m; i < n; i++) {
      matrix.push(new Array(n).fill("x"));
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = matrix[i].filter((v) => v !== "x");
  }
  matrix = matrix.filter((v) => v.length > 0);
  return matrix;
};

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
console.log(
  transpose([
    [1, 4],
    [2, 5],
    [3, 6],
  ])
);
console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(transpose([[3,7,8]]))
