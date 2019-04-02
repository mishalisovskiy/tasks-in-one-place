import readlineSync from 'readline-sync';

const resolveTask87 = () => {
  console.log('Find the sum of the last n digits of m.');
  const m = Number(readlineSync.question('Please choose m: '));
  const n = Number(readlineSync.question('Please choose n: '));

  const findSum = () => {
    const requiredOperands = String(m).split('').slice(-n).map(Number);
    return requiredOperands.reduce((acc, element) => acc + element);
  };
  console.log(findSum());
};

export default resolveTask87;
