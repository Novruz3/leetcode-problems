var isMonotonic = function (nums) {
  if (nums[0] >= nums[nums.length - 1]) {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] < nums[i + 1]) {
        return false;
      }
    }
  } else {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        return false;
      }
    }
  }
  return true;
};

console.log(isMonotonic([1,2,3,3,3,4]))
console.log(isMonotonic([1,2,3,3,3,2]))
console.log(isMonotonic([5,4,3,3,3,3]))
console.log(isMonotonic([1,2,2,3]))
console.log(isMonotonic([6,5,4,4]))
console.log(isMonotonic([1,1,1]))
console.log(isMonotonic([1]))