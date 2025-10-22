// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// I variant
// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;
//   for (let i = 0; i < s.length; i++) {
//     t = t.replace(s[i], "");
//   }
//   return t === "";
// };

// II variant
// var isAnagram = function (s, t) {
//   return s.split("").sort().join("") === t.split("").sort().join("");
// };
