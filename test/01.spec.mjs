import expect from 'expect.js';
import { readFileSync } from 'fs';
import { calculatePartOne } from '../01.mjs';

const when = (fileName, then) => {

  let result;

  describe('when counting the number of times the depth increases', () => {

    beforeEach(() => {
      const data = readFileSync(fileName, { encoding: 'ascii' })
        .split('\n')
        .map(depth => parseInt(depth, 10));
      result = calculatePartOne(data);
    });

    then(() => result);

  });

}

describe('given the sample data set', () => {

  when('01.sample.data', getResult => {

    it('then result should be 7', () => {
      const result = getResult();
      expect(result).to.be(7);
    });

  });

});

describe('given the data set', () => {

  when('01.data', getResult => {

    it('then result should be 1602', () => {
      const result = getResult();
      expect(result).to.be(1602);
    });

  });

});