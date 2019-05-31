import readlineSync from 'readline-sync';

const enterNum = () => {
  const n = Number(readlineSync.question('Please enter n: '));
  return n;
};

const numberLength = (n) => {
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(Number(n))) {
    return 'Invalid input, enter a number';
  }
  return String(n).split('').length;
};

const findSum = (n) => {
  const sum = String(n).split('').reduce((acc, cur) => +acc + +cur);
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(sum)) {
    return 'Invalid input, enter a number';
  }
  return Number(sum);
};

const perfectNum = (n) => {
  for (let y = n; y > 0; y -= 1) {
    const arr = [];
    for (let i = y; i > 0; i -= 1) {
      if (y % i === 0) {
        arr.push(i);
      }
    }
    if (arr.reduce((acc, cur) => acc + cur) / 2 === y) {
      console.log(y);
    }
  }
};

export {
  enterNum,
  numberLength,
  findSum,
  perfectNum,
};
