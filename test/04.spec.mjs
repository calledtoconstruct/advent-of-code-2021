import { solvePartOne, solvePartTwo } from '../04.mjs'
import { runTest } from '../test.mjs'

const description = 'when finding bingo board';

[
  { description: `${description} that wins for part one`, file: '04.sample.data', calculator: solvePartOne, result: 4512 },
  { description: `${description} that wins for part one`, file: '04.data', calculator: solvePartOne, result: 14093 },
  { description: `${description} that loses for part two`, file: '04.sample.data', calculator: solvePartTwo, result: 1924 },
  { description: `${description} that loses for part two`, file: '04.data', calculator: solvePartTwo, result: 17388 }
].forEach(runTest);
