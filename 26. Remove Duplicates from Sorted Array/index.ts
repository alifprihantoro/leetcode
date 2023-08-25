let NUMS: number[]
// explain :
// tambahkan satu ke k jika nomor tidak sama lalu ubah index ke k dengan val pembanding
function removeDuplicates(nums: number[]): number {
  let k = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[k]) {
      k++
      nums[k] = nums[i]
    } 
  }
  NUMS = nums
  return k+1
};

function result(nums: number[]): { k: number, NUMS: number[] } {
  const k = removeDuplicates(nums)
  return { k, NUMS }
}

export default result
