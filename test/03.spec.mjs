import { solvePartOne, solvePartTwo } from '../03.mjs';
import { runTest } from '../test.mjs'

const description = 'when pulling the diagnostic report';

[
  { description: `${description} for part one`, file: '03.sample.data', calculator: solvePartOne, result: 198 },
  { description: `${description} for part one`, file: '03.data', calculator: solvePartOne, result: 3969000 },
  { description: `${description} for part two`, file: '03.sample.data', calculator: solvePartTwo, result: 230 },
  { description: `${description} for part two`, file: '03.data', calculator: solvePartTwo, result: 4267809 }
].forEach(runTest);