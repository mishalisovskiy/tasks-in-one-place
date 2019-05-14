import { findSmallestRaisedToPower } from './Tkachuk109';

describe('Function should return correct values', () => {
  test('-1', () => {
    expect(findSmallestRaisedToPower(-1)).toBe(1);
  });
  test('0', () => {
    expect(findSmallestRaisedToPower(0)).toBe(1);
  });
  test('10', () => {
    expect(findSmallestRaisedToPower(10)).toBe(16);
  });
  test('16', () => {
    expect(findSmallestRaisedToPower(16)).toBe(32);
  });
  test('-32', () => {
    expect(findSmallestRaisedToPower(-32)).toBe(1);
  });
  test('null', () => {
    expect(findSmallestRaisedToPower(null)).toBe('Invalid input, enter a number');
  });
  test('undefind', () => {
    expect(findSmallestRaisedToPower()).toBe('Invalid input, enter a number');
  });
  test('string', () => {
    expect(findSmallestRaisedToPower('')).toBe('Invalid input, enter a number');
  });
});
