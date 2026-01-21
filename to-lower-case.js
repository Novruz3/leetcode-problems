// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

// Example 1:
// Input: s = "Hello"
// Output: "hello"

// Example 2:
// Input: s = "here"
// Output: "here"

// Example 3:
// Input: s = "LOVELY"
// Output: "lovely"

// Constraints:
// 1 <= s.length <= 100
// s consists of printable ASCII characters.

var toLowerCase = function (s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    let n = s[i].charCodeAt(0);
    let str = s[i];
    if (n >= 65 && n <= 90) {
      str = String.fromCharCode(n + 32);
    }
    res += str;
  }
  return res;
};
