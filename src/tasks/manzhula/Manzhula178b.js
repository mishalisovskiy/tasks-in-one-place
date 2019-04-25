import readlineSync from 'readline-sync';

const resolveTask178b = () => {
  console.log('Find count of items numbers from 1 to n, which are multiple 3 and not multiple 5');
  const n = Number(readlineSync.question('Please choose n: '));

  const findCount = () => {
    let count = 0;
    for (let i = 3; i <= n; i += 3) {
      if (i % 5) {
        count += 1;
      }
    }
    return count;
  };
  console.log(findCount());
};

export default resolveTask178b;