import { whatNumber, numSqr } from './utils';

const resolveTask243a = () => {
  console.log('Set the natural number n as the sum of two squares of natural numbers such that n = x^2 + y^2');

  const n = whatNumber();

  const result = numSqr(n);
  console.log(`x = ${result[0]}, y = ${result[1]}`);

  return `x = ${result[0]}, y = ${result[1]}`;
};

export default resolveTask243a;
