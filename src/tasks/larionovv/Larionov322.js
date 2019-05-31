import { enterNumber, maxSumDivisors } from './utils';

const resolveTask322 = () => {
  console.log('---------------------\nFind out sum divisors of number "n"\n---------------------');
  const n = enterNumber();
  if (!Number(n)) {
    return console.log('invalid value');
  } if (n < 0) {
    console.log('invalid value n<0');
  }console.log(maxSumDivisors(n));
  return maxSumDivisors(n);
};

export default resolveTask322;
