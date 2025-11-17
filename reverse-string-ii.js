// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.
// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

// Example 1:
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"

// Example 2:
// Input: s = "abcd", k = 2
// Output: "bacd"

var reverseStr = function (s, k) {
  let start = 0;
  while (start < s.length) {
    let end = Math.min(start + k, s.length);
    s =
      s.slice(0, start) +
      s.slice(start, end).split("").reverse().join("") +
      s.slice(end);
    start += 2 * k;
  }
  return s;
};
