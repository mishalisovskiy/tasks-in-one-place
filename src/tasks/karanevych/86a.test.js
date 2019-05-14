import { numberLength } from './utils';

describe('Testing 86a', () => {
  it('should return valid calculation', () => {
    expect(numberLength(0)).toBe(1);
    expect(numberLength(1)).toBe(1);
    expect(numberLength(-1)).toBe(2);
    expect(numberLength(100)).toBe(3);
    expect(numberLength(12579327)).toBe(8);
    expect(numberLength(155)).toBe(3);
  });

  it('should return warning if no value is passed', () => {
    const result = numberLength();
    expect(result).toBe('Invalid input, enter a number');
  });

  it('should return warning if passed value is not a number', () => {
    const result = numberLength('aaaabbbbccccdddd');
    expect(result).not.toBe(16);
  });
});
