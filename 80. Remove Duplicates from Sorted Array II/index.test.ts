import { expect, test } from 'vitest'
import mvElShort from './'

test('example 1', () => {
  const nums = [1, 1, 1, 2, 2, 3]
  const EXPECT = [1, 1, 2, 2, 3]
  const result = mvElShort(nums)
  for (let i = 0; i < result.k; i++) {
    expect(result.NUMS[i]).toBe(EXPECT[i])
  }
})
test('example 2', () => {
  const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]
  const EXPECT = [0, 0, 1, 1, 2, 3, 3]
  const result = mvElShort(nums)
  for (let i = 0; i < result.k; i++) {
    expect(result.NUMS[i]).toBe(EXPECT[i])
  }
})
test('example 3', () => {
  const nums = [1]
  const EXPECT = [1]
  const result = mvElShort(nums)
  for (let i = 0; i < result.k; i++) {
    expect(result.NUMS[i]).toBe(EXPECT[i])
  }
})
test('example 4', () => {
  const nums = [1, 2]
  const EXPECT = [1, 2]
  const result = mvElShort(nums)
  for (let i = 0; i < result.k; i++) {
    expect(result.NUMS[i]).toBe(EXPECT[i])
  }
})
test('example 5', () => {
  const nums = [1, 1, 1]
  const EXPECT = [1, 1]
  const result = mvElShort(nums)
  for (let i = 0; i < result.k; i++) {
    expect(result.NUMS[i]).toBe(EXPECT[i])
  }
})
