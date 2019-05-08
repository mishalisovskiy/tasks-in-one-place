import { getMeANumber } from './utils';

export const findSum = (num1, num2) => {
  const requiredOperands = String(num1).split('').slice(-num2).map(Number);
  return requiredOperands.reduce((acc, element) => acc + element);
};

const resolveTask87 = () => {
  console.log('Find the sum of the last n digits of m.');

  const m = getMeANumber('m');
  const n = getMeANumber('n');

  console.log(findSum(m, n));
};

export default resolveTask87;
