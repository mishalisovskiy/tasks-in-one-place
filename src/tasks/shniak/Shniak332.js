import { lagrangeNumbers, whatNumber } from './utils';

export const resolveTask332 = () => {
  console.log('------------------------\nTask 332 - Lagrange’s Four Square Theorem: find four non negative integers, sum of squares of which gives n.\n------------------------');

  const n = whatNumber();

  console.log(lagrangeNumbers(n));

  return lagrangeNumbers(n);
};

export default resolveTask332;
