import { perfectNum } from './utils';

describe('Testing 86a', () => {
  it('should return valid calculation 0', () => {
    global.console = {
      log: jest.fn(),
    };
    perfectNum(0);
    expect(global.console.log).toHaveBeenCalledTimes(0);
  });

  it('should return valid calculation 10', () => {
    global.console = {
      log: jest.fn(),
    };
    perfectNum(10);
    expect(global.console.log).toHaveBeenCalledTimes(1);
    expect(global.console.log).toHaveBeenCalledWith(6);
  });

  it('should return valid calculation 100', () => {
    global.console = {
      log: jest.fn(),
    };
    perfectNum(100);
    expect(global.console.log).toHaveBeenCalledTimes(2);
    expect(global.console.log).toHaveBeenCalledWith(6);
    expect(global.console.log).toHaveBeenCalledWith(28);
  });

  it('should return valid calculation 1000', () => {
    global.console = {
      log: jest.fn(),
    };
    perfectNum(1000);
    expect(global.console.log).toHaveBeenCalledTimes(3);
    expect(global.console.log).toHaveBeenCalledWith(496);
    expect(global.console.log).toHaveBeenCalledWith(28);
    expect(global.console.log).toHaveBeenCalledWith(6);
  });
});
