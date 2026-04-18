var sortArrayByParity = function(nums){
  let l = 0
  let r = nums.length - 1
  while (l<r) {
    while (nums[l]%2==0) {
      l++
    }
    while (nums[r]%2==1) {
      r--
    }
    if (l<r) {
      let rem = nums[l]
      nums[l] = nums[r]
      nums[r] = rem
    }
    l++
    r--
  }
  return nums
}

console.log(sortArrayByParity([3,1,2,4]))
console.log(sortArrayByParity([1,2]))
console.log(sortArrayByParity([1,3]))
console.log(sortArrayByParity([0]))
console.log(sortArrayByParity([2,4,6]))
console.log(sortArrayByParity([2,3,4,5,6,8,7,9,1]))
console.log(sortArrayByParity([2,4,6,8,1,3]))
console.log(sortArrayByParity([1,3,5,2,4,6,8]))