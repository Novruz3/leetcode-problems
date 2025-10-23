// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:
// Each letter in pattern maps to exactly one unique word in s.
// Each unique word in s maps to exactly one letter in pattern.
// No two letters map to the same word, and no two words map to the same letter.

// Example 1:
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Explanation:
// The bijection can be established as:
// 'a' maps to "dog".
// 'b' maps to "cat".

// Example 2:
// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false

// Example 3:
// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

var wordPattern = function (pattern, s) {
  let arrr = s.split(" ");
  let l = arrr.length;
  if (pattern.length !== l) return false;
  let arrP = [];
  let arrS = [];
  for (let i = 0; i < l; i++) {
    let arr = [];
    for (let j = 0; j < l; j++) {
      if (pattern[i] == pattern[j]) {
        arr.push(j);
      }
    }
    arrP.push(arr);
  }
  for (let i = 0; i < l; i++) {
    let arr = [];
    for (let j = 0; j < l; j++) {
      if (arrr[i] == arrr[j]) {
        arr.push(j);
      }
    }
    arrS.push(arr);
  }
  return arrP.join("") == arrS.join("");
};
