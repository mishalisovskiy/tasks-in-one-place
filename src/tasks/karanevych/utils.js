import readlineSync from 'readline-sync';

const enterNum = () => {
  const n = Number(readlineSync.question('Please enter n: '));
  return n;
};

const numberLength = n => n.toString().split('').length;

const findSum = (n) => {
  const sum = n.toString().split('').reduce((acc, cur) => +acc + +cur);
  return sum;
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
