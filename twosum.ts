// const twoSum = (nums: number[], target: number) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let ii = 0; ii <= nums.length; ii++) {
//       if (nums[i] + nums[ii] == target && i != ii) {
//         console.log(`if ${nums[i]}+${nums[ii]}=${target}`)
//         return [i, ii]
//       }
//     }
//   }
// }

function twoSum(nums: number[], target: number, i = 0, ii = 0) {
  if (nums[i] + nums[ii] == target && i != ii) {
    return [i, ii]
  }
  if (ii == nums.length) {
    twoSum(nums, target, i++, 0)
    return
  }
  if (i == nums.length) {
    return
  }
  twoSum(nums, target, i, ii++)
}
console.log(twoSum([1, 1], 2))
console.log(twoSum([1, 1, 3], 4))
console.log(twoSum([1, 2, 3, 4, 5], 6))
console.log(twoSum([3, 2, 4], 6))
