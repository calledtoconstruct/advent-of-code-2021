import { solvePartOne } from '../05.mjs'
import { runTest } from '../test.mjs'

const description = 'when finding overlapping lines';

[
  { description: `${description} for part one`, file: '05.sample.data', calculator: solvePartOne, result: 5 },
  { description: `${description} for part one`, file: '05.data', calculator: solvePartOne, result: 6564 }
].forEach(runTest);
