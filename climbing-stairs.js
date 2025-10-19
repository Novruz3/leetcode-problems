// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

let climbStairs = function (n) {
  // n=1 => 1
  // n=2 => 2
  // n=3 => 3 = 1+2
  // n=4 => 5 = 2+3
  // n=5 => 8 = 3+5
  // n=6 => 13
  // n=7 => 21
  
  if (n < 3) {
    return n;
  }
  let first = 1;
  let second = 2;
  for (let i = 2; i < n; i++) {
    let a = first;
    first = second;
    second = a + first;
  }
  return second;
};
