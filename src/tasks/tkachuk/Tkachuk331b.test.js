import { findAllThree } from './Tkachuk331b';

describe('Function findAllThree should return correct values', () => {
  test('-1', () => {
    expect(findAllThree(-1)).toEqual('Cant be represented as n = x2 + y2 + z2');
  });
  // test('0', () => {
  //   expect(findAllThree(0)).toEqual('Cant be represented as n = x2 + y2 + z2');  //Invalid input, enter a number
  // });
  test('1', () => {
    expect(findAllThree(1)).toEqual('Cant be represented as n = x2 + y2 + z2');
  });
  test('3', () => {
    expect(findAllThree(3)).toEqual(['1^2 + 1^2 + 1^2 = 3']);
  });
  test('13', () => {
    expect(findAllThree(13)).toEqual('Cant be represented as n = x2 + y2 + z2');
  });
  test('14', () => {
    expect(findAllThree(14)).toEqual([
      '1^2 + 2^2 + 3^2 = 14',
      '1^2 + 3^2 + 2^2 = 14',
      '2^2 + 1^2 + 3^2 = 14',
      '2^2 + 3^2 + 1^2 = 14',
      '3^2 + 1^2 + 2^2 = 14',
      '3^2 + 2^2 + 1^2 = 14',
    ]);
  });
  test('null', () => {
    expect(findAllThree(null)).toEqual('Invalid input, enter a number');
  });
  test('undefind', () => {
    expect(findAllThree()).toEqual('Invalid input, enter a number');
  });
  test('string', () => {
    expect(findAllThree('')).toEqual('Invalid input, enter a number');
  });
});
