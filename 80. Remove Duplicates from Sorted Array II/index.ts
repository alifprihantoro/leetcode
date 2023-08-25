let NUMS: number[]
// explain :
// jika arr kurang dari dua maka lolos
// jika dua index dari current nums sama dengan current val maka lolos
// jika lolos k ditambah 1 dan current val ditambahkan ke nums index k
function removeDuplicates(nums: number[]): number {
  let k = 0
  for (let i = 0; i < nums.length; i++) {
    if (k < 2 || nums[i] != nums[k - 2]) {
      nums[k] = nums[i]
      k++
    }
  }
  NUMS = nums
  return k
};

function result(nums: number[]): { k: number, NUMS: number[] } {
  const k = removeDuplicates(nums)
  return { k, NUMS }
}
export default result
