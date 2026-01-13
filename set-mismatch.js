// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.
// You are given an integer array nums representing the data status of this set after the error.
// Find the number that occurs twice and the number that is missing and return them in the form of an array.

// Example 1:
// Input: nums = [1,2,2,4]
// Output: [2,3]

// Example 2:
// Input: nums = [1,1]
// Output: [1,2]

// Constraints:
// 2 <= nums.length <= 104
// 1 <= nums[i] <= 104

var findErrorNums = function (nums) {
  let len = nums.length;
  let sum = 0;
  let squareSum = 0;
  for (let i = 0; i < len; i++) {
    sum += nums[i];
    squareSum += nums[i] * nums[i];
  }
  let expectedSum = (len * (len + 1)) / 2;
  let expectedSquareSum = (len * (len + 1) * (2 * len + 1)) / 6;
  let s = sum - expectedSum;
  let ss = squareSum - expectedSquareSum;
  // s = sum - expectedSum = dup - miss
  // ss = sum^2 - expectedSum^2 = (sum - expectedSum) * (sum + expectedSum) = s * total
  let total = ss / s;
  let dup = (s + total) / 2;
  let miss = dup - s;
  return [dup, miss];
};
