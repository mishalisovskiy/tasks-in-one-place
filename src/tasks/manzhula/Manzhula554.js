import readlineSync from 'readline-sync';

export const resolveTask554 = () => {
  console.log('Find all Pythagorean triple for all a <= b <= c <= n.');
  const n = Number(readlineSync.question('Please choose n: '));
  console.log(findAll(n));
};

export const findAll = (n) => {
  if (!n || isNaN(n) || n < 5) return 'Invalid input, enter a number greater than 5';
  for (let i = 1; i < n; i += 1) {
    for (let j = 1; j < i; j += 1) {
      const k = Math.sqrt(i * i + j * j);
      if (k % 1 === 0) {
        return `${i}, ${j}, ${k}`;
      }
    }
  }
};