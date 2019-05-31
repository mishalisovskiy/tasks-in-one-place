/* eslint-disable no-undef */
import { resolveTask107 } from './Rudka107';
import * as utils from './utils';

jest.dontMock('./utils');

describe('Function numPow must return correct values', () => {
  test('-1', () => {
    expect(utils.numPow(-1)).toEqual(0);
  });
  test('0', () => {
    expect(utils.numPow(0)).toEqual(0);
  });
  test('5', () => {
    expect(utils.numPow(5)).toEqual(1);
  });
  test('10', () => {
    expect(utils.numPow(10)).toEqual(1);
  });
  test('2320', () => {
    expect(utils.numPow(2320)).toEqual(5);
  });
  test('100000', () => {
    expect(utils.numPow(100000)).toEqual(8);
  });
  test('-100000', () => {
    expect(utils.numPow(-100000)).toEqual(0);
  });
  test('string', () => {
    expect(utils.numPow('')).toEqual(0);
  });
});

describe('Function resolveTask107 must work correctly', () => {
  test('If numPow and whatNumber mock works', () => {
    const whatNumberMock = jest.spyOn(utils, 'whatNumber');
    const numPowMock = jest.spyOn(utils, 'numPow');
    numPowMock.mockImplementation(num => num);
    whatNumberMock.mockImplementation(() => 10);
    const number = whatNumberMock();
    expect(numPowMock(number)).toBe(10);
  });
  test('If resolveTask107 calls functions', () => {
    const whatNumberMock = jest.spyOn(utils, 'whatNumber');
    const numPowMock = jest.spyOn(utils, 'numPow');
    numPowMock.mockImplementation(num => num);
    whatNumberMock.mockImplementation(() => 10);
    const result = resolveTask107();
    expect(result).toEqual(10);
  });
  test('If console log in resolveTask107 is called', () => {
    const whatNumberMock = jest.spyOn(utils, 'whatNumber');
    const numPowMock = jest.spyOn(utils, 'numPow');
    numPowMock.mockImplementation(num => num);
    whatNumberMock.mockImplementation(() => 10);
    global.console = {
      warn: jest.fn(),
      log: jest.fn(),
    };
    resolveTask107();
    expect(global.console.log).toHaveBeenCalledWith(10);
  });
  test('If console log in resolveTask107 didn\'t return bad value', () => {
    const whatNumberMock = jest.spyOn(utils, 'whatNumber');
    const numPowMock = jest.spyOn(utils, 'numPow');
    numPowMock.mockImplementation(num => num);
    whatNumberMock.mockImplementation(() => 8);
    global.console = {
      warn: jest.fn(),
      log: jest.fn(),
    };
    resolveTask107();
    expect(global.console.log).not.toHaveBeenCalledWith(10);
  });
});
