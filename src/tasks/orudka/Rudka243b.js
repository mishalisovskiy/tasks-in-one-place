import readlineSync from 'readline-sync';

const resolveTask243b = () => {
  console.log('Set the natural number n as the sum of two squares of natural numbers such that n = x^2 + y^2, x>=y');
  const n = Number(readlineSync.question('Please choose n: '));

  const numSqr = () => {
    if (n < 1) {
      return false;
    }
    const arr = [];
    for (let x = 1; x <= (Math.sqrt(n)); x += 1) {
      for (let y = 1; y <= (Math.sqrt(n)); y += 1) {
        if ((x ** 2) + (y ** 2) === n && x >= y) {
          arr.push([x, y]);
        }
      }
    }
    return arr;
  };
  for (let i = 0; i < numSqr(n).length; i += 1) {
    const result = numSqr();
    console.log(`x = ${result[i][0]}, y = ${result[i][1]}`);
  }
};

export default resolveTask243b;
