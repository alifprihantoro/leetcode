// import merge from './'
//
// describe('sum module', () => {
//   test('adds 1 + 2 to equal 3', () => {
//     console.log(merge('hello'))
//     expect('1').toBe(1);
//   });
// });
import { expect, test } from 'vitest'
import merge from './'

// Edit an assertion and save to see HMR in action

test('example 1', () => {
  const nums1 = [1, 2, 3, 0, 0, 0]
  const m = 3
  const nums2 = [2, 5, 6]
  const n = 3
  const output = [1, 2, 2, 3, 5, 6]
  const merge_result = merge(nums1, m, nums2, n)
  output.forEach((val,i) => {
    expect(merge_result[i]).toBe(val)
  })
})

test('example 2', () => {
  const nums1 = [1]
  const m = 1
  const nums2 = []
  const n = 0
  const output = [1]
  const merge_result = merge(nums1, m, nums2, n)
  output.forEach((val,i) => {
    expect(merge_result[i]).toBe(val)
  })
})

test('example 3', () => {
  const nums1 = [0]
  const m = 0
  const nums2 = [1]
  const n = 1
  const output = [1]
  const merge_result = merge(nums1, m, nums2, n)
  output.forEach((val,i) => {
    expect(merge_result[i]).toBe(val)
  })
})

test('example 4', () => {
  const nums1 = [1,2,3,0,0,0]
  const m = 3
  const nums2 = [2,5,6]
  const n = 3
  const output = [1,2,2,3,5,6]
  const merge_result = merge(nums1, m, nums2, n)
  output.forEach((val,i) => {
    expect(merge_result[i]).toBe(val)
  })
})

