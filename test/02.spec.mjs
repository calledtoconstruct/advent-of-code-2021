import { solvePartOne, solvePartTwo } from '../02.mjs';
import { runTest } from '../test.mjs'

const description = 'when navigating the submarine';

[
  { description: `${description} for part one`, file: '02.sample.data', calculator: solvePartOne, result: 150 },
  { description: `${description} for part one`, file: '02.data', calculator: solvePartOne, result: 1882980 },
  { description: `${description} for part two`, file: '02.sample.data', calculator: solvePartTwo, result: 900 },
  { description: `${description} for part two`, file: '02.data', calculator: solvePartTwo, result: 1971232560 },
].forEach(runTest);