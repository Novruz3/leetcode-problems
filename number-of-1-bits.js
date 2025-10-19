// Given a positive integer n, write a function that returns the number of set bits in its binary representation (also known as the Hamming weight).

// Example 1:
// Input: n = 11
// Output: 3
// Explanation:
// The input binary string 1011 has a total of three set bits.

// Example 2:
// Input: n = 128
// Output: 1
// Explanation:
// The input binary string 10000000 has a total of one set bit.

// Example 3:
// Input: n = 2147483645
// Output: 30
// Explanation:
// The input binary string 1111111111111111111111111111101 has a total of thirty set bits.

let hammingWeight = function (n) {
  let res = 0;
  let binary = "";
  while (n > 1) {
    let rem = n % 2;
    n = (n - rem) / 2;
    binary = rem + binary;
  }
  binary = 1 + binary;
  for (let i = 0; i < binary.length; i++) {
    res += Number(binary.charAt(i));
  }
  return res;
};
