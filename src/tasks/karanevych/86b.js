import readlineSync from 'readline-sync';

const resolveTask86b = () => {
  console.log('------------------------\nTask 86b - what is the sum of the numbers of n.\n------------------------');
  let n = Number(readlineSync.question('Please enter n: '));
  function findSumm() {
    n = n.toString().split('');
    n = n.reduce((acc, cur) => +acc + +cur);
    return n;
  }
  console.log(findSumm());
};

export default resolveTask86b;
