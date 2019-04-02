import readlineSync from 'readline-sync';

const resolveTask226 = () => {
  console.log('Find the common multiples of n and m \nwhich are less than their product.');
  const m = Number(readlineSync.question('Please choose m: '));
  const n = Number(readlineSync.question('Please choose n: '));

  const findCommonMultiples = () => {
    const limit = m * n;
    const commonMultiples = [];
    let i = m > n ? m : n;

    for (; i < limit; i += 1) {
      if (i % m === 0 && i % n === 0) {
        commonMultiples.push(i);
      }
    }

    return commonMultiples;
  };

  console.log(findCommonMultiples());
};

export default resolveTask226;
