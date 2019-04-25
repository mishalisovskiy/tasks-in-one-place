import readlineSync from 'readline-sync';

const resolveTask178v = () => {
  console.log('Find count of items numbers from 1 to n, which are squares of even numbers.');
  const n = Number(readlineSync.question('Please choose n: '));

  const findCount = () => {
    let count = 0;

    for (let i = 2; i * i <= n; i += 2) {
      count += 1;
    }

    return count;
  };
  console.log(findCount());
};

export default resolveTask178v;
