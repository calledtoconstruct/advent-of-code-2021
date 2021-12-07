import expect from 'expect.js';
import { readFileSync } from 'fs';

const runTest = (scenario) => {

  describe(`given the data from ${scenario.file}`, () => {

    describe(scenario.description, () => {

      let result;
  
      beforeEach(() => {
        const data = readFileSync(scenario.file, { encoding: 'ascii' });
        const lines = data.split('\n');
        result = scenario.calculator(lines);
      });
  
      it(`then result should be ${scenario.result}`, () => {
        expect(result).to.be(scenario.result);
      });
  
    });

  });

};

export {
  runTest
};