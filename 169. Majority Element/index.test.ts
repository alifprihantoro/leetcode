import { expect, test } from 'vitest'
import majorityElement from './'

test('example 1', () => {
  const nums = [3, 2, 3]
  const EXPECT = 3
  const RESULT = majorityElement(nums)
  expect(RESULT).toBe(EXPECT)
})
test('example 2', () => {
  const nums = [-1, 1, 1, 1, 2, 1]
  const EXPECT = 1
  const RESULT = majorityElement(nums)
  expect(RESULT).toBe(EXPECT)
})
