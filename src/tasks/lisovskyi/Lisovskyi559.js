import { getMeANumber, isPrime } from './utils';

export const findMersenneNums = (num) => {
  const arrayOfMersenneNums = [];
  const mersenneCalculation = m => (2 ** m) - 1;

  for (let i = 1; i < Math.sqrt(num); i += 1) {
    if (isPrime(i) && isPrime(mersenneCalculation(i)) && mersenneCalculation(i) < num) {
      arrayOfMersenneNums.push(mersenneCalculation(i));
    }
  }

  return arrayOfMersenneNums;
};

const resolveTask559 = () => {
  console.log('Find Mersenne numbers less than n');
  const n = getMeANumber('n');

  console.log(findMersenneNums(n));
};

export default resolveTask559;
