import { expect, test } from 'vitest'
import mvElShort from './'

test('example 1', () => {
  const nums = [1, 1, 2]
  const EXPECT = [1, 2]
  const result = mvElShort(nums)
  for (let i = 0; i < result.k; i++) {
    expect(result.NUMS[i]).toBe(EXPECT[i])
  }
})
test('example 1', () => {
  const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
  const EXPECT = [0, 1, 2, 3, 4]
  const result = mvElShort(nums)
  for (let i = 0; i < result.k; i++) {
    expect(result.NUMS[i]).toBe(EXPECT[i])
  }
})
