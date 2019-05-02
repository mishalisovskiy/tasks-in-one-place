import { findCount } from './Manzhula178b';

describe('Testing Manzhula178b', () => {
  it('should return valid calculation', () => {
    const result = findCount(100);
    expect(result).toBe(27);
  });

  it('should return warning if no value is passed', () => {
    const result = findCount();
    expect(result).toBe('Invalid input, enter a number');
  });

  it('should return warning if passed value is not a number', () => {
    const result = findCount('asd');
    expect(result).toBe('Invalid input, enter a number');
  });
});
