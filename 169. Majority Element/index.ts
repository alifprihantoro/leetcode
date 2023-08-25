// explaint :
// gabungkan menjadi satu object. misal angka satu ada di obj.satu = 1++
// loop object dan hitung value terbesar
// value taruh di hight_num untuk di bandingkan dengan obj lain
// key ditaruh ke result
function majorityElement(nums: number[]): number {
  const LIST_NUM = {}
  let HIGHT_NUM = 0
  let RESULT = 0
  for (let i = 0; i < nums.length; i++) {
    if (LIST_NUM[nums[i]] === undefined) {
      LIST_NUM[nums[i]] = 1
    } else {
      LIST_NUM[nums[i]] = LIST_NUM[nums[i]] + 1
    }
  }
  for (const key in LIST_NUM) {
    if (HIGHT_NUM <= LIST_NUM[key]) {
      HIGHT_NUM = LIST_NUM[key]
      RESULT = Number(key)
    }
  }
  return RESULT
};
export default majorityElement
