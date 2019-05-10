import { lagrangeNumbers } from './utils';

describe('testing lagrangeNumbers function', () => {
  it('n= -1', () => {
    const result = lagrangeNumbers(-1);
    expect(result).toEqual(undefined);
  });

  it('n= 1', () => {
    const result = lagrangeNumbers(1);
    expect(result).toEqual(undefined);
  });

  it('n= 2', () => {
    const result = lagrangeNumbers(2);
    expect(result).toEqual([1, 1, 0, 0]);
  });

  it('n= 10', () => {
    const result = lagrangeNumbers(10);
    expect(result).toEqual([3, 1, 0, 0]);
  });

  it('n= 100', () => {
    const result = lagrangeNumbers(100);
    expect(result).toEqual([9, 3, 3, 1]);
  });
});
