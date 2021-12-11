import { solvePartOne } from '../11.mjs'
import { runTest } from '../test.mjs'

const description = 'when checking syntax';

[
  { description: `${description} for part one`, file: '11.sample.data', calculator: solvePartOne, result: 1656 },
  { description: `${description} for part one`, file: '11.data', calculator: solvePartOne, result: 1681 }
].forEach(runTest);
