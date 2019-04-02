import readlineSync from 'readline-sync';

const resolveTask86a = () => {
  console.log('------------------------\nTask 86a - how many digits in number n.\n------------------------');
  const n = Number(readlineSync.question('Please enter n: '));
  function numberLength() {
    return n.toString().split('').length;
  }
  console.log(numberLength());
};

export default resolveTask86a;
