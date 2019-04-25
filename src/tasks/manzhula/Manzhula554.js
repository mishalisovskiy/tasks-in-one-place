import readlineSync from 'readline-sync';

const resolveTask554 = () => {
  console.log('Find all Піфагорові Трійки for all a <= b <= c <= n.');
  const n = Number(readlineSync.question('Please choose n: '));

  const findAll = () => {
    for (let i = 1; i < n; i += 1) {
      for (let j = 1; j < i; j += 1) {
        const k = Math.sqrt(i * i + j * j);
        if (k % 1 === 0) {
          console.log(i, j, k);
        }
      }
    }
  };
  findAll();
};

export default resolveTask554;
