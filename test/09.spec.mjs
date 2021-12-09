import { solvePartOne } from '../09.mjs'
import { runTest } from '../test.mjs'

const description = 'when deducing the segments';

[
  { description: `${description} for part one`, file: '09.sample.data', calculator: solvePartOne, result: 15 },
  { description: `${description} for part one`, file: '09.data', calculator: solvePartOne, result: 631 }
].forEach(runTest);
