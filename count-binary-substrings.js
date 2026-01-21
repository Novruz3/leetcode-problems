// Given a binary string s, return the number of non-empty substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.
// Substrings that occur multiple times are counted the number of times they occur.

// Example 1:
// Input: s = "00110011"
// Output: 6
// Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
// Notice that some of these substrings repeat and are counted the number of times they occur.
// Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.

// Example 2:
// Input: s = "10101"
// Output: 4
// Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal number of consecutive 1's and 0's.

// Constraints:
// 1 <= s.length <= 105
// s[i] is either '0' or '1'.

// my idea
var countBinarySubstrings = function (s) {
  let n0 = 0;
  let n1 = 0;
  let arr = [];
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") {
      if (n1 !== 0) {
        arr.push(n1);
        n1 = 0;
      }
      n0++;
    } else {
      if (n0 !== 0) {
        arr.push(n0);
        n0 = 0;
      }
      n1++;
    }
  }
  if (n0 !== 0) {
    arr.push(n0);
  } else {
    arr.push(n1);
  }
  for (let i = 0; i < arr.length - 1; i++) {
    res += Math.min(arr[i], arr[i + 1]);
  }
  return res;
};

// better than me
var countBinarySubstrings = function (s) {
  let prev = 0;
  let curr = 1;
  let res = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      curr++;
    } else {
      res += Math.min(prev, curr);
      prev = curr;
      curr = 1;
    }
  }
  return res + Math.min(prev, curr);
};
