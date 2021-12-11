import { solvePartOne, solvePartTwo } from '../11.mjs'
import { runTest } from '../test.mjs'

const description = 'when calculating flashes';

[
  { description: `${description} for part one`, file: '11.sample.data', calculator: solvePartOne, result: 1656 },
  { description: `${description} for part one`, file: '11.data', calculator: solvePartOne, result: 1681 },
  { description: `${description} for part two`, file: '11.sample.data', calculator: solvePartTwo, result: 195 },
  { description: `${description} for part two`, file: '11.data', calculator: solvePartTwo, result: 276 }
].forEach(runTest);
