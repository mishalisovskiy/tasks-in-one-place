import readlineSync from 'readline-sync';

const resolveTaskLarionov88b = () => {
  console.log('Return reverse number n');
  let num = String(readlineSync.question('Please enter n: '));
  const reverseNum = () => {
    num = num.split('').reverse().join('');
    return num;
  };
  console.log(reverseNum());
};

export default resolveTaskLarionov88b;
