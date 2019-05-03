import { numPow, whatNumber } from './utils';

export const resolveTask107 = () => {
  console.log('Get the largest integer k for which 4^k < m');

  const m = whatNumber();

  console.log(numPow(m));

  return numPow(m);
};

export default resolveTask107;
