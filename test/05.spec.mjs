import { solvePartOne, solvePartTwo } from '../05.mjs'
import { runTest } from '../test.mjs'

const description = 'when finding overlapping lines';

[
  { description: `${description} for part one`, file: '05.sample.data', calculator: solvePartOne, result: 5 },
  { description: `${description} for part one`, file: '05.data', calculator: solvePartOne, result: 6564 },
  { description: `${description} for part two`, file: '05.sample.data', calculator: solvePartTwo, result: 12 },
  { description: `${description} for part two`, file: '05.data', calculator: solvePartTwo, result: 19172 }
].forEach(runTest);
