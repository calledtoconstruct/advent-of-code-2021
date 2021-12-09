import { solvePartOne } from '../08.mjs'
import { runTest } from '../test.mjs'

const description = 'when deducing the segments';

[
  { description: `${description} for part one`, file: '08.sample.data', calculator: solvePartOne, result: 26 },
  { description: `${description} for part one`, file: '08.data', calculator: solvePartOne, result: 237 }
].forEach(runTest);
