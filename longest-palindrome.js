// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome.

// Example 1:
// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

// Example 2:
// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

var longestPalindrome = function (s) {
  let arr = s.split("");
  let uniqueArr = [...new Set(arr)];
  let ans = 0;
  for (let i = 0; i < uniqueArr.length; i++) {
    let len = arr.filter((el) => el == uniqueArr[i]).length;
    len % 2 == 0 ? (ans += len) : (ans += len - 1);
  }
  if (s.length == ans) {
    return ans;
  } else {
    return ans + 1;
  }
};
