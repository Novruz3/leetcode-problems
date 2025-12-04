// We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.
// Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

// Example 1:
// Input: nums = [1,3,2,2,5,2,3,7]
// Output: 5
// Explanation:
// The longest harmonious subsequence is [3,2,2,2,3].

// Example 2:
// Input: nums = [1,2,3,4]
// Output: 2
// Explanation:
// The longest harmonious subsequences are [1,2], [2,3], and [3,4], all of which have a length of 2.

// Example 3:
// Input: nums = [1,1,1,1]
// Output: 0
// Explanation:
// No harmonic subsequence exists.

var findLHS = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
      continue;
    }
    map.set(nums[i], 1);
  }

  let maxLength = 0;
  for (let num of map.keys()) {
    if (map.has(num + 1)) {
      maxLength = Math.max(maxLength, map.get(num) + map.get(num + 1));
    }
  }

  return maxLength;
};
