// Given two binary strings a and b, return their sum as a binary string.

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"

let addBinary = function (a, b) {
  let arr = (BigInt(a) + BigInt(b)).toString().split("").map(Number);
  for (let i = arr.length - 1; i > 0; i--) {
    switch (arr[i]) {
      case 3:
        arr[i] = 1;
        arr[i - 1]++;
        break;
      case 2:
        arr[i] = 0;
        arr[i - 1]++;
        break;
      default:
        break;
    }
  }
  switch (arr[0]) {
    case 3:
      arr[0] = 1;
      arr.unshift(1);
      break;
    case 2:
      arr[0] = 0;
      arr.unshift(1);
      break;
    default:
      break;
  }
  return arr.join("");
};
