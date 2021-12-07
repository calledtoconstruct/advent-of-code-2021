import expect from 'expect.js';
import { readFileSync } from 'fs';
import { solvePartOne, solvePartTwo } from '../01.mjs';

const when = (fileName, calculator, then) => {

  let result;

  describe('when counting the number of times the depth increases', () => {

    beforeEach(() => {
      const data = readFileSync(fileName, { encoding: 'ascii' })
        .split('\n')
        .map(depth => parseInt(depth, 10));
      result = calculator(data);
    });

    then(() => result);

  });

}

describe('given the sample data set', () => {

  when('01.sample.data', solvePartOne, getResult => {

    it('then result should be 7', () => {
      const result = getResult();
      expect(result).to.be(7);
    });

  });

  when('01.sample.data', solvePartTwo, getResult => {

    it('then result should be 5', () => {
      const result = getResult();
      expect(result).to.be(5);
    });

  });

});

describe('given the data set', () => {

  when('01.data', solvePartOne, getResult => {

    it('then result should be 1602', () => {
      const result = getResult();
      expect(result).to.be(1602);
    });

  });

  when('01.data', solvePartTwo, getResult => {

    it('then result should be 1633', () => {
      const result = getResult();
      expect(result).to.be(1633);
    });

  });

});