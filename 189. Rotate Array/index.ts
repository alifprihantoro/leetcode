/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  for (let i = 0; i < k; i++) {
    nums.splice(0, 0, nums[nums.length - 1])
    nums.pop()
    console.log(nums)
  }

};
// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
console.log(rotate([-1,-100,3,99], 2))
