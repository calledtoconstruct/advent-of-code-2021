import expect from 'expect.js';
import { readFileSync } from 'fs';
import { solvePartOne, solvePartTwo } from '../01.mjs';

const when = (calculator, description, fileName, then) => {

  let result;

  describe(`when counting the number of times the depth increases ${description}`, () => {

    beforeEach(() => {
      const data = readFileSync(fileName, { encoding: 'ascii' })
        .split('\n')
        .map(depth => parseInt(depth, 10));
      result = calculator(data);
    });

    then(() => result);

  });

}

[
  { part: 'one', file: '01.sample.data', calculator: solvePartOne, result: 7 },
  { part: 'one', file: '01.data', calculator: solvePartOne, result: 1602 },
  { part: 'two', file: '01.sample.data', calculator: solvePartTwo, result: 5 },
  { part: 'two', file: '01.data', calculator: solvePartTwo, result: 1633 }
].forEach(scenario => {

  describe(`given the data from ${scenario.file}`, () => {
  
    when(scenario.calculator, `for part ${scenario.part}`, scenario.file, getResult => {
  
      it(`then result should be ${scenario.result}`, () => {
        const result = getResult();
        expect(result).to.be(scenario.result);
      });
  
    });

  });

});