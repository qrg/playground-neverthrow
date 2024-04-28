/* eslint-disable @typescript-eslint/no-unused-vars */

import { sum } from './sum.js'

console.log(sum(1, 2))

const array = [1, 10, 100, 1000, 10_000]

const promises = Array.from({ length: 3 }).map(
  (element, index) =>
    new Promise((resolve) => setTimeout(resolve, index * 1000)),
)

// ES2020
const o = { a: { b: 'b' } }
o?.a?.b ?? 'c'

const waitForAllSettled = async () => await Promise.allSettled(promises)

// ES2021
100_000_000
0xff_00_00

'aaabbbccc'.replaceAll('a', 'z')

const waitForAny = async () => await Promise.any(promises)

// ES2022
await new Promise((resolve) => setTimeout(resolve, 1))

console.log(array.at(1))

if (array.length === 0) {
  throw new Error('An example of a thrown error', { cause: 'unknown' })
}

// ES2023
array.findLast((element) => element >= 100)
array.findLastIndex((element) => element >= 100)
