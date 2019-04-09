import readlineSync from 'readline-sync';

const resolveTask107 = () => {
  console.log('Get the largest integer k for which 4^k < m');
  const m = Number(readlineSync.question('Please choose m: '));

  const numPow = () => {
    let k = 1;
    if (m <= 1) {
      return 0;
    }
    while (4 ** k <= m) {
      k += 1;
    }
    return k - 1;
  };
  console.log(numPow());
};

export default resolveTask107;
