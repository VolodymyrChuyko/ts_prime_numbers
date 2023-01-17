import { expect, test, describe } from '@jest/globals';
import { PrimeNumber } from './primenum';

describe('isPrimeNumber', () => {
  test.each([
    [2],
    [3],
    [5],
    [7],
  ])(
    'should return "true" for single digit prime number',
    number => {
      const sut = new PrimeNumber;

      const isPrimeNumber = sut.isPrimeNumber(number);

      expect(isPrimeNumber).toBe(true);
    }
  );

  test.each([
    [11],
    [13],
    [17],
    [19],
    [23],
    [29],
    [67],
    [113],
    [199],
    [564391],
  ])(
    'should return "true" for multy digit prime number',
    number => {
      const sut = new PrimeNumber;

      const isPrimeNumber = sut.isPrimeNumber(number);

      expect(isPrimeNumber).toBe(true);
    }
  );

  test.each([
    [0],
    [1],
    [4],
    [6],
    [8],
    [9],
  ])(
    'should return "false" for single digit not prime number',
    number => {
      const sut = new PrimeNumber;

      const isPrimeNumber = sut.isPrimeNumber(number);

      expect(isPrimeNumber).toBe(false);
    }
  );

  test.each([
    [10],
    [27],
    [25],
    [97310],
    [756222],
    [588904],
    [6495],
    [234256],
    [4678],
    [26577],
    [56457439111],
    [564574391118],
  ])(
    'should return "false" for multy digit not prime number',
    number => {
      const sut = new PrimeNumber;

      const isPrimeNumber = sut.isPrimeNumber(number);

      expect(isPrimeNumber).toBe(false);
    }
  );

  test(
    'should return range of prime numbers',
    () => {
      const start = 0;
      const end = 200;
      const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];
      const sut = new PrimeNumber;

      const range = sut.range(start, end);

      expect(range).toEqual(primeNumbers);
    }
  );
});
