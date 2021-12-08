import { solvePartOne } from '../07.mjs'
import { runTest } from '../test.mjs'

const description = 'when aligning the crabs';

[
  { description: `${description} for part one`, file: '07.sample.data', calculator: solvePartOne, result: 37 },
  { description: `${description} for part one`, file: '07.data', calculator: solvePartOne, result: 355521 },
  // { description: `${description} for part two`, file: '07.sample.data', calculator: solvePartTwo, result: 42 },
  // { description: `${description} for part two`, file: '07.data', calculator: solvePartTwo, result: 42 }
].forEach(runTest);
