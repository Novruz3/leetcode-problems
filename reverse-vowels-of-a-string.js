// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:
// Input: s = "IceCreAm"
// Output: "AceCreIm"
// Explanation:
// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"

var reverseVowels = function (s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    let el = s[i].toLocaleLowerCase();
    if (el == "a" || el == "e" || el == "i" || el == "o" || el == "u") {
      arr.push([s[i], i]);
    }
  }
  let l = arr.length;
  let arrS = s.split("");
  for (let i = 0; i < Math.floor(l / 2); i++) {
    arrS[arr[i][1]] = arr[l - i - 1][0];
    arrS[arr[l - i - 1][1]] = arr[i][0];
  }
  return arrS.join("");
};
