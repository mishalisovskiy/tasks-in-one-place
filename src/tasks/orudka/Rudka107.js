import readlineSync from 'readline-sync';

const resolveTask107 = () => {
  console.log('Get the largest integer k for which 4^k < m');
  const m = Number(readlineSync.question('Please choose m: '));

  const numPow = (m) => {
    let k = 1;
    if (m <= 1){
        return 0;
    }
    while (Math.pow(4, k) <= m) { k++ }
    return --k;
  }
  console.log(numPow(m));
};

export default resolveTask107;