import { enterNum, findSum } from './utils';

const resolveTask86b = () => {
  console.log('------------------------\nTask 86b - what is the sum of the numbers of n.\n------------------------');
  const n = enterNum();
  console.log(findSum(n));
  return findSum(n);
};

export default resolveTask86b;
