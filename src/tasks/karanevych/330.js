import { enterNum, perfectNum } from './utils';

const resolveTask330 = () => {
  console.log('------------------------\nTask 330 - get perfect numbers less than n.\n------------------------');
  const n = enterNum();
  return perfectNum(n);
};

export default resolveTask330;
