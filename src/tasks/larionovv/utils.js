import readlineSync from 'readline-sync';

export const enterNumber = () => {
  const n = Number(readlineSync.question('Please enter n: '));
  if (!Number(n)) {
    console.log('Invalid number');
    enterNumber();
  }
  return n;
};

export const findNumInRecord = (n) => {
  let result = '';
  const str = String(n * n);
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '3') {
      result = 'present';
      break;
    } else {
      result = 'not present';
    }
  }
  return `Number "3" is ${result} in record ${str}`;
};

export const reverseNum = (n) => {
  let num = String(n);
  num = num.split('').reverse().join('');
  return num;
};

export const maxSumDivisors = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i += 1) {
    if (!(n % i)) {
      sum += i;
    }
  }
  return `Sum divisors of number "${n}" is ${sum}`;
};
