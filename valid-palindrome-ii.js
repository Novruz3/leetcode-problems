// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Example 1:
// Input: s = "aba"
// Output: true

// Example 2:
// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.

// Example 3:
// Input: s = "abc"
// Output: false

// Constraints:
// 1 <= s.length <= 105
// s consists of lowercase English letters.

//ozim islemedim
function validPalindrome(s) {
  let l = 0, r = s.length - 1;
  while (l < r && s[l] === s[r]) {
    l++; r--;
  }
  if (l >= r) return true;

  const isPal = (i, j) => {
    while (i < j) {
      if (s[i] !== s[j]) return false;
      i++; j--;
    }
    return true;
  };

  return isPal(l + 1, r) || isPal(l, r - 1);
}
