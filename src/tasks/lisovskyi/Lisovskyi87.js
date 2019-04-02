import readlineSync from 'readline-sync';

const task87 = () => {
  console.log('Find the sum of the last n digits of m.');
  const m = readlineSync.question('Please choose m: ');
  const n = readlineSync.question('Please choose n: ');
  const findSum = (number, digits) => {
    const requiredOperands = String(number).split('').slice(-digits).map(Number);
    return requiredOperands.reduce((acc, element) => acc + element);
  };
  console.log(findSum(m, n));
};

export default task87;
