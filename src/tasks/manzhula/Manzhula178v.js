import readlineSync from 'readline-sync';

export const resolveTask178v = () => {
  console.log('Find count of items numbers from 1 to n, which are squares of even numbers.');
  const n = Number(readlineSync.question('Please choose n: '));
  console.log(findCount(n));
};

export const findCount = (n) => {
  if (!n || isNaN(n)) return 'Invalid input, enter a number';
  let count = 0;
  for (let i = 2; i * i <= n; i += 2) {
    count += 1;
  }
  return count;
};