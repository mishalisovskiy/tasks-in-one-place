import readlineSync from 'readline-sync';

const resolveTask330 = () => {
  console.log('------------------------\nTask 330 - get perfect numbers less than n.\n------------------------');
  const n = Number(readlineSync.question('Please enter n: '));
  function perfect() {
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
  }
  perfect();
};

export default resolveTask330;
