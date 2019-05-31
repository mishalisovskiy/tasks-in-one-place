import { getMeANumber } from './utils';

export const findCommonMultiples = (num1, num2) => {
  const limit = num1 * num2;
  const commonMultiples = [];
  let i = num1 > num2 ? num1 : num2;

  for (; i < limit; i += 1) {
    if (i % num1 === 0 && i % num2 === 0) {
      commonMultiples.push(i);
    }
  }

  return commonMultiples;
};

const resolveTask226 = () => {
  console.log(
    '---------------------\nFind the common multiples of n and m \nwhich are less than their product.',
  );
  const m = getMeANumber('m');
  const n = getMeANumber('n');

  console.log(findCommonMultiples(m, n));
};

export default resolveTask226;
