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
  return k;
};
export default removeElement
