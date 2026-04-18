var smallestRangeI = function (nums, k) {
  let range = Math.max(...nums) - Math.min(...nums);
  if (range / 2 <= k) {
    return 0;
  } else {
    return range - 2 * k;
  }
};

console.log(smallestRangeI([1], 0));
console.log(smallestRangeI([0, 10], 2));
console.log(smallestRangeI([1,3,6], 3));
