/* eslint-disable no-undef */
import resolveTask243b from './Rudka243a';
import * as utils from './utils';

jest.dontMock('./utils');

describe('Function numSqrB must return correct values', () => {
  test('-1', () => {
    expect(utils.numSqrB(-1)).toBeFalsy();
  });
  test('0', () => {
    expect(utils.numSqrB(0)).toBeFalsy();
  });
  test('5', () => {
    expect(utils.numSqrB(5)).toEqual([[2, 1]]);
  });
  test('10', () => {
    expect(utils.numSqrB(10)).toEqual([[3, 1]]);
  });
  test('2320', () => {
    expect(utils.numSqrB(2320)).toEqual([[36, 32], [48, 4]]);
  });
  test('100000', () => {
    expect(utils.numSqrB(100000)).toEqual([[260, 180], [300, 100], [316, 12]]);
  });
  test('-100000', () => {
    expect(utils.numSqrB(-100000)).toBeFalsy();
  });
  test('string', () => {
    expect(utils.numSqrB('')).toBeFalsy();
  });
});

describe('Function resolveTask243b must work correctly', () => {
  test('If numSqrB and whatNumber mock works', () => {
    const whatNumberMock = jest.spyOn(utils, 'whatNumber');
    const numSqrBMock = jest.spyOn(utils, 'numSqrB');
    numSqrBMock.mockImplementation(num => [num, num]);
    whatNumberMock.mockImplementation(() => 10);
    const number = whatNumberMock();
    expect(numSqrBMock(number)).toEqual([10, 10]);
  });
  test('If resolveTask243b calls functions', () => {
    const whatNumberMock = jest.spyOn(utils, 'whatNumber');
    const numSqrBMock = jest.spyOn(utils, 'numSqrB');
    numSqrBMock.mockImplementation(num => [num, num]);
    whatNumberMock.mockImplementation(() => 10);
    const result = resolveTask243b();
    expect(result).toEqual('x = 1, y = 3');
  });
  test('If console log in resolveTask243b is called', () => {
    const whatNumberMock = jest.spyOn(utils, 'whatNumber');
    const numSqrBMock = jest.spyOn(utils, 'numSqrB');
    numSqrBMock.mockImplementation(num => [num, num]);
    whatNumberMock.mockImplementation(() => 10);
    global.console = {
      warn: jest.fn(),
      log: jest.fn(),
    };
    resolveTask243b();
    expect(global.console.log).toHaveBeenCalledWith('x = 1, y = 3');
  });
  test('If console log in resolveTask243b didn\'t return bad value', () => {
    const whatNumberMock = jest.spyOn(utils, 'whatNumber');
    const numSqrBMock = jest.spyOn(utils, 'numSqrB');
    numSqrBMock.mockImplementation(num => num);
    whatNumberMock.mockImplementation(() => 8);
    global.console = {
      warn: jest.fn(),
      log: jest.fn(),
    };
    resolveTask243b();
    expect(global.console.log).not.toHaveBeenCalledWith(10);
  });
});
