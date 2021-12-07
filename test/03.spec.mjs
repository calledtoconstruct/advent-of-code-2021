import expect from 'expect.js';
import { readFileSync } from 'fs';
import { solvePartOne } from '../03.mjs';

const when = (calculator, description, fileName, then) => {

  let result;

  describe(`when pulling the diagnostic report ${description}`, () => {

    beforeEach(() => {
      const data = readFileSync(fileName, { encoding: 'ascii' })
        .split('\n');
      result = calculator(data);
    });

    then(() => result);

  });

}

[
  { part: 'one', file: '03.sample.data', calculator: solvePartOne, result: 198 },
  { part: 'one', file: '03.data', calculator: solvePartOne, result: 3969000 }
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