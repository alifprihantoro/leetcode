let NUMS: number[]
// explain :
// mengganti nums array yang memiliki nilai sama dengan val
// nums array tidak harus urut
// tidak menggunakan tambahan variable (langsung di nums arg)
// misal nums = [0, 1, 2, 2, 3, 0, 4, 2] val=2 => nums = [ 0, 1, 3, 0, 4, 0, 4, 2 ] return 5
// maka akan diambil angka 5 angka pertama dari return function
function removeElement(nums: number[], val: number): number {
  // Counter for keeping track of elements other than val
  let k = 0;
  // Loop through all the elements of the array
  for (let i = 0; i < nums.length; i++) {
    // If the element is not val
    if (nums[i] !== val) {
      nums[k++] = nums[i];
    }
  }
  NUMS = nums

  return k;
};

function result(nums: number[], val: number): { NUMS: number[], k: number } {
  const k = removeElement(nums, val)
  return { NUMS, k }
}
export default result
