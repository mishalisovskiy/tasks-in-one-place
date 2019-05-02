import { findAll } from './Manzhula554';

describe('Testing Manzhula554', () => {
  it('should return valid calculation', () => {
    const result = findAll(5);
    expect(result).toEqual(['4, 3, 5']);
  });

  it('should return warning if no value is passed', () => {
    const result = findAll();
    expect(result).toBe('Invalid input, enter a number greater than 5');
  });

  it('should return warning if passed value is not a number', () => {
    const result = findAll('asd');
    expect(result).toBe('Invalid input, enter a number greater than 5');
  });

  it('should return warning if passed passed value is a number < 5', () => {
    const result = findAll(1);
    expect(result).toBe('Invalid input, enter a number greater than 5');
  });
});
