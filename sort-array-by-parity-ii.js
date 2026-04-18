// var sortArrayByParityII = function (nums) {
//   let le = 0;
//   let lo = 1;
//   let re = nums.length - 2;
//   let ro = nums.length - 1;
//   while (Math.max(le, lo) < Math.min(re, ro)) {
//     while (nums[le] % 2 == 0) {
//       le+=2;
//     }
//     while (nums[lo] % 2 == 1) {
//       lo+=2;
//     }
//     while (nums[ro] % 2 == 1) {
//       ro-=2;
//     }
//     while (nums[re] % 2 == 0) {
//       re-=2;
//     }
//     if (le < ro) {
//       let rem = nums[le];
//       nums[le] = nums[ro];
//       nums[ro] = rem;
//     }
//     le+=2;
//     ro-=2;
//     if (lo < re) {
//       let rem = nums[lo];
//       nums[lo] = nums[re];
//       nums[re] = rem;
//     }
//     lo+=2;
//     re-=2;
//   }
//   return nums;
// };

var sortArrayByParityII = function (nums) {
  let lo = 1;
  for (let le = 0; le < nums.length; le += 2) {
    if (nums[le] % 2 !== 0) {
      while (nums[lo] % 2 !== 0) {
        lo += 2;
      }
      let rem = nums[le];
      nums[le] = nums[lo];
      nums[lo] = rem;
    }
  }
  return nums;
};

console.log(sortArrayByParityII([4,2,5,7]))
console.log(sortArrayByParityII([2,3]))
console.log(sortArrayByParityII([1,3,4,5,8,6,7,9,2,0]))