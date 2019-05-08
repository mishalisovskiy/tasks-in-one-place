import readlineSync from 'readline-sync';

export const getMeANumber = (numberChar) => {
  const number = Number(readlineSync.question(`Please enter ${numberChar}: `));

  return number;
};

export const isPrime = (input) => {
  let prime = true;

  for (let i = 2; i <= Math.sqrt(input); i += 1) {
    if (input % i === 0) {
      prime = false;
      break;
    }
  }
  return !!prime && (input > 1);
};
