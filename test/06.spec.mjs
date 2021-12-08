import { solvePartOne, solvePartTwo } from '../06.mjs'
import { runTest } from '../test.mjs'

const description = 'when calculating the proliferation of the fish';

[
  { description: `${description} for part one`, file: '06.sample.data', calculator: solvePartOne, result: 5934 },
  { description: `${description} for part one`, file: '06.data', calculator: solvePartOne, result: 391671 },
  { description: `${description} for part two`, file: '06.sample.data', calculator: solvePartTwo, result: 26984457539 },
  { description: `${description} for part two`, file: '06.data', calculator: solvePartTwo, result: 1754000560399 }
].forEach(runTest);
