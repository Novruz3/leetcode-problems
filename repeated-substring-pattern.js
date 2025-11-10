// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

// Example 1:
// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.

// Example 2:
// Input: s = "aba"
// Output: false

// Example 3:
// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

var repeatedSubstringPattern = function (s) {
  if (
    s.split(s.slice(0, 1)).join("") === "" &&
    s.split(s.slice(0, 1)).length > 2
  ) {
    return true;
  }
  let len = s.length;
  for (let i = 2; i < len; i++) {
    if (s.length % i === 0) {
      if (
        s.split(s.slice(0, i)).join("") === "" ||
        s.split(s.slice(0, len / i)).join("") === ""
      ) {
        return true;
      } else {
        len /= i;
      }
    }
  }
  return false;
};
