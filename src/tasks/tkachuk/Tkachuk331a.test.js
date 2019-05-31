import { findThree } from './Tkachuk331a';

describe('Function findThree should return correct values', () => {
  test('-1', () => {
    expect(findThree(-1)).toEqual(false);
  });
  test('0', () => {
    expect(findThree(0)).toEqual(false);
  });
  test('1', () => {
    expect(findThree(1)).toEqual(false);
  });
  test('3', () => {
    expect(findThree(3)).toEqual(true);
  });
  test('13', () => {
    expect(findThree(13)).toEqual(false);
  });
  test('14', () => {
    expect(findThree(14)).toEqual(true);
  });
  test('null', () => {
    expect(findThree(null)).toEqual('Invalid input, enter a number');
  });
  test('undefind', () => {
    expect(findThree()).toEqual('Invalid input, enter a number');
  });
  test('string', () => {
    expect(findThree('')).toEqual('Invalid input, enter a number');
  });
});
