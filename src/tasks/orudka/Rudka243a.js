import readlineSync from 'readline-sync';

const resolveTask243a = () => {
  console.log('Set the natural number n as the sum of two squares of natural numbers such that n = x^2 + y^2');
  const n = Number(readlineSync.question('Please choose n: '));

  const numSqr = () => {
    if (n < 1) {
      return false;
    }
    for (let x = 1; x <= (Math.sqrt(n)); x += 1) {
      for (let y = 1; y <= (Math.sqrt(n)); y += 1) {
        if ((x ** 2) + (y ** 2) === n) {
          return [x, y];
        }
      }
    }
    return false;
  };
  const result = numSqr();
  console.log(`x = ${result[0]}, y = ${result[1]}`);
};

export default resolveTask243a;
