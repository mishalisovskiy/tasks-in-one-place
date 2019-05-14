import readlineSync from 'readline-sync';

export const findSmallestRaisedToPower = (n) => {
  if (typeof n !== 'number') return 'Invalid input, enter a number';
  let result = 1;
  while (result <= n) {
    result *= 2;
  }
  return result;
};

export const resolveTask109 = () => {
  console.log(
    '---------------------\nTask 109 - What is the smallest number of a kind 2^r, that is bigger than n.\n---------------------',
  );
  const n = Number(readlineSync.question('Please enter n: '));
  console.log(findSmallestRaisedToPower(n));
};
