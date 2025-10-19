// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: rowIndex = 3
// Output: [1,3,3,1]

// Example 2:
// Input: rowIndex = 0
// Output: [1]

// Example 3:
// Input: rowIndex = 1
// Output: [1,1]

let fack = function (n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
};

let getRow = function (rowIndex) {
  let res = [];
  for (let i = 0; i <= rowIndex; i++) {
    res[i] = Math.round(fack(rowIndex) / fack(rowIndex - i) / fack(i));
  }
  return res;
};
