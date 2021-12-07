import { solvePartOne, solvePartTwo } from '../01.mjs';
import { runTest } from '../test.mjs'

const description = 'when counting the number of times the depth increases';

[
  { description: `${description} for part one`, file: '01.sample.data', calculator: solvePartOne, result: 7 },
  { description: `${description} for part one`, file: '01.data', calculator: solvePartOne, result: 1602 },
  { description: `${description} for part two`, file: '01.sample.data', calculator: solvePartTwo, result: 5 },
  { description: `${description} for part two`, file: '01.data', calculator: solvePartTwo, result: 1633 }
].forEach(runTest);