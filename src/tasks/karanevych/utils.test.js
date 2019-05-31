import readlineSync from 'readline-sync';
import { enterNum } from './utils';

describe('Testing enterNum', () => {
  it('should return valid input', () => {
    readlineSync.question = jest.fn(readlineSync.question);
    readlineSync.question.mockImplementation(() => '5');

    const result = enterNum();

    expect(readlineSync.question).toHaveBeenCalledTimes(1);
    expect(readlineSync.question).toHaveBeenCalledWith('Please enter n: ');
    expect(result).toBe(5);
  });
});
