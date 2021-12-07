import { solvePartOne } from '../04.mjs'
import { runTest } from '../test.mjs'

const description = 'when finding winning bingo board';

[
  { description: `${description} for part one`, file: '04.sample.data', calculator: solvePartOne, result: 4512 },
  { description: `${description} for part one`, file: '04.data', calculator: solvePartOne, result: 14093 }
].forEach(runTest);
