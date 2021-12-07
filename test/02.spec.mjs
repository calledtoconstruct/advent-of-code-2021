import expect from 'expect.js';
import { readFileSync } from 'fs';
import { solvePartOne, solvePartTwo } from '../02.mjs';

const when = (calculator, description, fileName, then) => {

  let result;

  describe(`when navigating the submarine ${description}`, () => {

    beforeEach(() => {
      const data = readFileSync(fileName, { encoding: 'ascii' })
        .split('\n');
      result = calculator(data);
    });

    then(() => result);

  });

}

[
  { part: 'one', file: '02.sample.data', calculator: solvePartOne, result: 150 },
  { part: 'one', file: '02.data', calculator: solvePartOne, result: 1882980 },
  { part: 'two', file: '02.sample.data', calculator: solvePartTwo, result: 900 },
  { part: 'two', file: '02.data', calculator: solvePartTwo, result: 1971232560 },
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