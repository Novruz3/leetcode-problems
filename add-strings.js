// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

// Example 1:
// Input: num1 = "11", num2 = "123"
// Output: "134"

// Example 2:
// Input: num1 = "456", num2 = "77"
// Output: "533"

// Example 3:
// Input: num1 = "0", num2 = "0"
// Output: "0"

var addStrings = function (num1, num2) {
  if (num1.length < 16 && num2.length < 16) {
    return (Number(num1) + Number(num2)).toString();
  }
  let res = "";
  if (num1.length > num2.length) {
    num2 = num2.padStart(num1.length, "0");
  } else {
    num1 = num1.padStart(num2.length, "0");
  }
  let sum = 0;
  for (let i = num1.length - 1; i >= 0; i--) {
    sum += Number(num1[i]) + Number(num2[i]);
    if (sum < 10) {
      res = sum + res;
      sum = 0;
    } else {
      sum -= 10;
      res = sum + res;
      sum = 1;
    }
  }
  return Number(num1[0]) + Number(num2[0]) > 9 || res[0] == "0" ? 1 + res : res;
};
