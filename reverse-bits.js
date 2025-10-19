// Reverse bits of a given 32 bits signed integer.

// Example 1:
// Input: n = 43261596
// Output: 964176192
// Explanation:
// Integer	Binary
// 43261596	  00000010100101000001111010011100
// 964176192	00111001011110000010100101000000

// Example 2:
// Input: n = 2147483644
// Output: 1073741822
// Explanation:
// Integer	Binary
// 2147483644	01111111111111111111111111111100
// 1073741822	00111111111111111111111111111110

let reverseBits = function (n) {
  if (n == 0) {
    return 0;
  }
  let res = 0;
  let binary = "";
  while (n > 1) {
    let rem = n % 2;
    n = (n - rem) / 2;
    binary = rem + binary;
  }
  binary = 1 + binary;
  binary.padStart(32, "0");
  let revBinary = binary.split("").reverse().join("");
  for (let i = 0; i < 32; i++) {
    res += revBinary.charAt(i) * Math.pow(2, 31 - i);
  }
  return res;
};
