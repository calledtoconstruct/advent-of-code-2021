import expect from 'expect.js';
import { readFileSync } from 'fs';
import { solvePartOne, solvePartTwo } from '../02.mjs';

const when = (fileName, calculator, then) => {

  let result;

  describe('when navigating the submarine', () => {

    beforeEach(() => {
      const data = readFileSync(fileName, { encoding: 'ascii' })
        .split('\n');
      result = calculator(data);
    });

    then(() => result);

  });

}

describe('given the sample data set', () => {

  when('02.sample.data', solvePartOne, getResult => {

    it('then result should be 150', () => {
      const result = getResult();
      expect(result).to.be(150);
    });

  });

  when('02.sample.data', solvePartTwo, getResult => {

    it('then result should be 900', () => {
      const result = getResult();
      expect(result).to.be(900);
    });

  });

});

describe('given the data set', () => {

  when('02.data', solvePartOne, getResult => {

    it('then result should be 1882980', () => {
      const result = getResult();
      expect(result).to.be(1882980);
    });

  });

  when('02.data', solvePartTwo, getResult => {

    it('then result should be 1971232560', () => {
      const result = getResult();
      expect(result).to.be(1971232560);
    });

  });

});