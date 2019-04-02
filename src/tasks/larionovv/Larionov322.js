// import readlineSync from 'readline-sync';

const resolveTaskLarionov322 = () => {
  console.log('Find out number "n" from 1 to 10000 with the maximum sum of divisors');
  // const num = String(readlineSync.question('Please enter n: '));
  const maxSumDivisors = () => {
    let sum = 0;
    let result = 0;
    let j;
    for (j = 0; j < 10000; j + 1) {
      for (let i = 1; i <= j; i + 1) {
        if (!(j % i)) {
          sum += i;
        }
        if (sum > result) {
          result = sum;
        }
      }
    }
    // for (let i = 1; i <= num; i++) {
    //   if (!(num % i)) {
    //     sum += i;
    //   }
    // }
    return `Maximum sum of divisors - ${result} have number ${j}`;
  };
  console.log(maxSumDivisors());
};

export default resolveTaskLarionov322;
