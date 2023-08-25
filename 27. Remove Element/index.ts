function removeElement(nums: number[], val: number): number {
  // Counter for keeping track of elements other than val
  let k = 0;
  // Loop through all the elements of the array
  for (let i = 0; i < nums.length; i++) {
    const v = nums[i]
    // If the element is not val
    if (v !== val) {
      nums[k++] = v;
    }
  }
  return k;
};
export default removeElement
