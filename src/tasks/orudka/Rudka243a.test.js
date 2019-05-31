/* eslint-disable no-undef */
import resolveTask243a from './Rudka243a';
import * as utils from './utils';

jest.dontMock('./utils');

describe('Function numSqr must return correct values', () => {
  test('-1', () => {
    expect(utils.numSqr(-1)).toBeFalsy();
  });
  test('0', () => {
    expect(utils.numSqr(0)).toBeFalsy();
  });
  test('5', () => {
    expect(utils.numSqr(5)).toEqual([1, 2]);
  });
  test('10', () => {
    expect(utils.numSqr(10)).toEqual([1, 3]);
  });
  test('2320', () => {
    expect(utils.numSqr(2320)).toEqual([4, 48]);
  });
  test('100000', () => {
    expect(utils.numSqr(100000)).toEqual([12, 316]);
  });
  test('-100000', () => {
    expect(utils.numSqr(-100000)).toBeFalsy();
  });
  test('string', () => {
    expect(utils.numSqr('')).toBeFalsy();
  });
});

describe('Function resolveTask243a must work correctly', () => {
  test('If numSqr and whatNumber mock works', () => {
    const whatNumberMock = jest.spyOn(utils, 'whatNumber');
    const numSqrMock = jest.spyOn(utils, 'numSqr');
    numSqrMock.mockImplementation(num => [num, num]);
    whatNumberMock.mockImplementation(() => 10);
    const number = whatNumberMock();
    expect(numSqrMock(number)).toEqual([10, 10]);
  });
  test('If resolveTask243a calls functions', () => {
    const whatNumberMock = jest.spyOn(utils, 'whatNumber');
    const numSqrMock = jest.spyOn(utils, 'numSqr');
    numSqrMock.mockImplementation(num => [num, num]);
    whatNumberMock.mockImplementation(() => 10);
    const result = resolveTask243a();
    expect(result).toEqual('x = 10, y = 10');
  });
  test('If console log in resolveTask243a is called', () => {
    const whatNumberMock = jest.spyOn(utils, 'whatNumber');
    const numSqrMock = jest.spyOn(utils, 'numSqr');
    numSqrMock.mockImplementation(num => [num, num]);
    whatNumberMock.mockImplementation(() => 10);
    global.console = {
      warn: jest.fn(),
      log: jest.fn(),
    };
    resolveTask243a();
    expect(global.console.log).toHaveBeenCalledWith('x = 10, y = 10');
  });
  test('If console log in resolveTask243a didn\'t return bad value', () => {
    const whatNumberMock = jest.spyOn(utils, 'whatNumber');
    const numSqrMock = jest.spyOn(utils, 'numSqr');
    numSqrMock.mockImplementation(num => [num, num]);
    whatNumberMock.mockImplementation(() => 8);
    global.console = {
      warn: jest.fn(),
      log: jest.fn(),
    };
    resolveTask243a();
    expect(global.console.log).not.toHaveBeenCalledWith('x = 10, y = 10');
  });
});
