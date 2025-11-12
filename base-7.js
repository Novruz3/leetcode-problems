// Given an integer num, return a string of its base 7 representation.

// Example 1:
// Input: num = 100
// Output: "202"

// Example 2:
// Input: num = -7
// Output: "-10"

var convertToBase7 = function (num) {
  res = "";
  if (num < 0) {
    num *= -1;
    var minus = "-";
  }
  while (num > 6) {
    let rem = num % 7;
    res = rem + res;
    num -= rem;
    num /= 7;
  }
  res = num + res;
  if (minus === "-") {
    return minus + res;
  } else {
    return res;
  }
};
