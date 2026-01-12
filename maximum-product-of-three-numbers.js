// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example 1:
// Input: nums = [1,2,3]
// Output: 6

// Example 2:
// Input: nums = [1,2,3,4]
// Output: 24

// Example 3:
// Input: nums = [-1,-2,-3]
// Output: -6

// Constraints:
// 3 <= nums.length <= 104
// -1000 <= nums[i] <= 1000

var maximumProduct = function (nums) {
  let len = nums.length;
  if (len === 3) return nums[0] * nums[1] * nums[2];
  let sorted = nums.sort((a, b) => a - b);
  return Math.max(
    sorted[0] * sorted[1] * sorted[len - 1],
    sorted[len - 3] * sorted[len - 2] * sorted[len - 1]
  );
};
