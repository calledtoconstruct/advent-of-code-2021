import { solvePartOne } from '../10.mjs'
import { runTest } from '../test.mjs'

const description = 'when checking syntax';

[
  { description: `${description} for part one`, file: '10.sample.data', calculator: solvePartOne, result: 26397 },
  { description: `${description} for part one`, file: '10.data', calculator: solvePartOne, result: 311949 }
].forEach(runTest);
