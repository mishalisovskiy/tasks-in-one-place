import {
  findNumInRecord, reverseNum, maxSumDivisors,
} from './utils';

describe('findNumInRecord function should determine if number 3 is present in the exponentiation of a given number', () => {
  it('test1', () => {
    const num = 4;
    expect(findNumInRecord(num)).toBe(`Number "3" is not present in record ${String(num * num)}`);
  });

  it('test2', () => {
    const num = 99999;
    expect(findNumInRecord(num)).toBe(`Number "3" is not present in record ${String(num * num)}`);
  });

  it('test2', () => {
    const num = -6;
    expect(findNumInRecord(num)).toBe(`Number "3" is present in record ${String(num * num)}`);
  });
});

describe('reverseNum function should determine if number 3 is present in the exponentiation of a given number', () => {
  it('test1', () => {
    const num = 4;
    expect(reverseNum(num)).toBe('4');
  });

  it('test2', () => {
    const num = 4582060;
    expect(reverseNum(num)).toBe('0602854');
  });

  it('test3', () => {
    const num = -10;
    expect(reverseNum(num)).toBe('01-');
  });
});

describe('maxSumDivisors function should find the sum of all divisors of a given number', () => {
  it('test1', () => {
    const num = 4;
    expect(maxSumDivisors(num)).toBe('Sum divisors of number "4" is 7');
  });

  it('test2', () => {
    const num = 4582060;
    expect(maxSumDivisors(num)).toBe('Sum divisors of number "4582060" is 11483136');
  });

  it('test3', () => {
    const num = -10;
    expect(maxSumDivisors(num)).toBe('Sum divisors of number "-10" is 0');
  });
});
