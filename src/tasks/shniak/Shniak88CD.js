import readlineSync from 'readline-sync';

export const swap = (n) => {
  const number = n.toString();
  const arr = Array.from(number);

  const a = arr[0];
  const b = arr[arr.length - 1];

  arr[0] = b;
  arr[arr.length - 1] = a;

  arr.push(1);
  arr.unshift(1);

  const result = arr.join(''); // -- should've add '+' to return int, but it returns 2 digits numbers devided by ten without a leading zero
  return result;
};

export const resolveTask88CD = () => {
  console.log("------------------------\nTask 88 (c and d) - Swap first and last element of a number (n) and add '1' on the beginning and the end.\n------------------------");
  const n = Number(readlineSync.question('Please enter n: '));

  console.log(swap(n));
};

export default resolveTask88CD;
