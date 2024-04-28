import { describe, expect, test } from 'vitest'

import { sum } from './sum.js'

describe('An example module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
