let RESULT_EX: number[] = []
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const mynums1 = nums1.slice(0, m)
  const mynums2 = nums2.slice(0, n)
  const MERGE = [...mynums1, ...mynums2]
  nums1.length = 0
  MERGE.forEach((val) => {
    if (nums1.length == 0) {
      nums1.push(val)
    } else {
      let index = 0
      nums1.forEach((val2, i) => {
        if (val >= val2) {
          index = i + 1
        }
      })
      nums1.splice(index, 0, val)
    }
  })
  RESULT_EX = nums1
};
function result(nums1: number[], m: number, nums2: number[], n: number) {
  merge(nums1, m, nums2, n)
  return RESULT_EX
}

export default result
