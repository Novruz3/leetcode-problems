// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:
// Input: s = "egg", t = "add"
// Output: true
// Explanation:
// The strings s and t can be made identical by:
// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.

// Example 2:
// Input: s = "foo", t = "bar"
// Output: false
// Explanation:
// The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

// Example 3:
// Input: s = "paper", t = "title"
// Output: true

// my solution, but
// Time Limit Exceeded
var isIsomorphic = function (s, t) {
  let first = [];
  let second = [];
  for (let i = 0; i < s.length; i++) {
    let arr = [];
    for (let j = 0; j < s.length; j++) {
      if (s.charAt(i) == s.charAt(j)) arr.push(j);
    }
    first.push(arr);
  }
  for (let i = 0; i < t.length; i++) {
    let arr = [];
    for (let j = 0; j < t.length; j++) {
      if (t.charAt(i) == t.charAt(j)) arr.push(j);
    }
    second.push(arr);
  }
  return JSON.stringify(first) === JSON.stringify(second);
};

// good solution
// var isIsomorphic = function (s, t) {
//   for (let i = 0; i < s.length; i++) {
//     if (s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) {
//       return false;
//     }
//   }
//   return true;
// };
