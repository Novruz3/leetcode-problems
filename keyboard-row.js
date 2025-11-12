// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.
// Note that the strings are case-insensitive, both lowercased and uppercased of the same letter are treated as if they are at the same row.
// In the American keyboard:
// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".

// Example 1:
// Input: words = ["Hello","Alaska","Dad","Peace"]
// Output: ["Alaska","Dad"]
// Explanation:
// Both "a" and "A" are in the 2nd row of the American keyboard due to case insensitivity.

// Example 2:
// Input: words = ["omk"]
// Output: []

// Example 3:
// Input: words = ["adsdf","sfd"]
// Output: ["adsdf","sfd"]

var findWords = function (words) {
  let res = [];
  let first = "qwertyuiop";
  let second = "asdfghjkl";
  let third = "zxcvbnm";
  let all = first + second + third;
  for (let i = 0; i < words.length; i++) {
    let num = 1;
    for (let j = 0; j < words[i].length; j++) {
      let ch = words[i][j].toLowerCase();
      let index = all.indexOf(ch);
      if (index < first.length) {
        num *= 2;
      } else if (index >= first.length + second.length) {
        num *= 3;
      }
    }
    if (
      num === 1 ||
      num === Math.pow(2, words[i].length) ||
      num === Math.pow(3, words[i].length)
    ) {
      res.push(words[i]);
    }
  }
  return res;
};