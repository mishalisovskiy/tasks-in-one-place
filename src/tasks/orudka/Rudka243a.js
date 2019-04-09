import readlineSync from 'readline-sync';

const resolveTask243a = () => {
  console.log('Set the natural number n as the sum of two squares of natural numbers such that n = x^2 + y^2');
  const n = Number(readlineSync.question('Please choose n: '));

  const numSqr = (n) => {
    if (n < 1) {
      return false;
    }
    for (let x = 1; x <= (Math.sqrt(n)); x++) {
      for (let y = 1; y <= (Math.sqrt(n)); y++) {
        if (Math.pow(x, 2) + Math.pow(y, 2) == n) {
          return [x, y];
          }
        }
      }
      return false;
    }
    const result = numSqr(n);
    console.log("x=" + result[0] + ", y=" + result[1]);
}

export default resolveTask243a;