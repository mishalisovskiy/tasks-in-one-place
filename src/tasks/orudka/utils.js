import readlineSync from 'readline-sync';

export const whatNumber = () => {
  const m = Number(readlineSync.question('Please choose m: '));
  return m;
};

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

export const numSqr = (n) => {
  if (n < 1) {
    return false;
  }
  for (let x = 1; x <= (Math.sqrt(n)); x += 1) {
    for (let y = 1; y <= (Math.sqrt(n)); y += 1) {
      if ((x ** 2) + (y ** 2) === n) {
        return [x, y];
      }
    }
  }
  return false;
};

export const numSqrB = (n) => {
  if (n < 1) {
    return false;
  }
  const arr = [];
  for (let x = 1; x <= (Math.sqrt(n)); x += 1) {
    for (let y = 1; y <= (Math.sqrt(n)); y += 1) {
      if ((x ** 2) + (y ** 2) === n && x >= y) {
        arr.push([x, y]);
      }
    }
  }
  return arr;
};
