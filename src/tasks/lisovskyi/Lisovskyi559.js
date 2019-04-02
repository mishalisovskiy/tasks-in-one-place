import readlineSync from 'readline-sync';

const isPrime = (input) => {
  let prime = true;

  for (let i = 2; i <= Math.sqrt(input); i += 1) {
    if (input % i === 0) {
      prime = false;
      break;
    }
  }
  return !!prime && (input > 1);
};

const resolveTask559 = () => {
  console.log('Find Mersenne numbers less than n');
  const n = Number(readlineSync.question('Please choose n: '));

  const findMersenneNums = () => {
    const arrayOfMersenneNums = [];
    const mersenneCalculation = m => (2 ** m) - 1;

    for (let i = 1; i < Math.sqrt(n); i += 1) {
      if (isPrime(i) && isPrime(mersenneCalculation(i)) && mersenneCalculation(i) < n) {
        arrayOfMersenneNums.push(mersenneCalculation(i));
      }
    }
    return arrayOfMersenneNums;
  };
  console.log(findMersenneNums());
};

export default resolveTask559;
