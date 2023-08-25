import { expect, test } from 'vitest'
import mvEl from './'
test('example 1', () => {
  const nums = [3, 2, 2, 3]
  const val = 3
  mvEl(nums, val)

})
test('example 2', () => {
  const nums = [0, 1, 2, 2, 3, 0, 4, 2]
  const val = 2
  mvEl(nums, val)

})
