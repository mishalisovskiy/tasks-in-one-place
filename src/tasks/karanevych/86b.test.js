import { findSum } from './utils';

describe('Testing 86a', () => {
  it('should return valid calculation', () => {
    expect(findSum(0)).toBe(0);
    expect(findSum(1)).toBe(1);
    expect(findSum(11)).toBe(2);
    expect(findSum(100)).toBe(1);
    expect(findSum(12579327)).toBe(36);
    expect(findSum(155)).toBe(11);
  });

  it('should return warning if no value is passed', () => {
    const result = numberLength();
    expect(result).toBe('Invalid input, enter a number');
  });

  it('should return warning if passed value is not a number', () => {
    const result = numberLength('aaaabbbbccccdddd');
    expect(result).toBe('Invalid input, enter a number');
  });
});
