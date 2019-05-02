import readlineSync from 'readline-sync';

export const numPow = (m) => {
  let k = 1;
  if (m <= 1) {
    return 0;
  }
  while (4 ** k <= m) {
    k += 1;
  }
  return k - 1;
};

export const whatNumber = () => {
  const m = Number(readlineSync.question('Please choose m: '));
  return m;
};
