import { enterNumber, maxSumDivisors } from './utils';

const resolveTask322 = () => {
  console.log('---------------------\nFind out sum divisors of number "n"\n---------------------');
  const n = enterNumber();
  console.log(maxSumDivisors(n));
};

export default resolveTask322;
