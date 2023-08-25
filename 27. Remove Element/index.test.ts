import { expect, test } from 'vitest'
import mvEl from './'
test('example 1', () => {
  const nums = [3, 2, 2, 3]
  const val = 3
  const result = mvEl(nums, val)
  result.NUMS.forEach((v, i) => {
    if (i <= result.k) {
      expect(v).not.toBe(val)
    }
  })
})
test('example 2', () => {
  const nums = [0, 1, 2, 2, 3, 0, 4, 2]
  const val = 2
  const result = mvEl(nums, val)
  result.NUMS.forEach((v, i) => {
    if (i <= result.k) {
      expect(v).not.toBe(val)
    }
  })
})
