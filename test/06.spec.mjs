import { solvePartOne } from '../06.mjs'
import { runTest } from '../test.mjs'

const description = 'when calculating the proliferation of the fish';

[
  { description: `${description} for part one`, file: '06.sample.data', calculator: solvePartOne, result: 5934 },
  { description: `${description} for part one`, file: '06.data', calculator: solvePartOne, result: 391671 }
].forEach(runTest);
