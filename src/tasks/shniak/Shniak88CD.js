import { swap, whatNumber } from './utils';

export const resolveTask88CD = () => {
  console.log("------------------------\nTask 88 (c and d) - Swap first and last element of a number (n) and add '1' on the beginning and the end.\n------------------------");

  const n = whatNumber();

  console.log(swap(n));

  return swap(n);
};

export default resolveTask88CD;
