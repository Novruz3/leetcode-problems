// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

// Example 2:
// Input: nums = [1,1]
// Output: [2]

var findDisappearedNumbers = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== nums[nums[i] - 1]) {
      let temp = nums[i];
      nums[i] = nums[temp - 1];
      nums[temp - 1] = temp;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1) res.push(i + 1);
  }
  return res;
};
