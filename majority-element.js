// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

let filterLength = function (arr, val) {
  let length = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == val) length++;
  }
  return length;
};

let majorityElement = function (nums) {
  let n = Math.floor(nums.length / 2) + 1;
  let set = new Set(nums);
  for (let i = 0; i < set.size; i++) {
    let length = filterLength(nums, [...set][i]);
    if (length >= n) return [...set][i];
  }
};
