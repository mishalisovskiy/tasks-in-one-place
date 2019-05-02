import { whatNumber, numSqrB } from './utils';

const resolveTask243b = () => {
  console.log('Set the natural number n as the sum of two squares of natural numbers such that n = x^2 + y^2, x>=y');

  const n = whatNumber();
  let result;

  for (let i = 0; i < numSqrB(n).length; i += 1) {
    result = numSqrB(n);
    console.log(`x = ${result[i][0]}, y = ${result[i][1]}`);
  }

  return result;
};

export default resolveTask243b;
