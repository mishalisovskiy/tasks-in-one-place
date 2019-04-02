import readlineSync from 'readline-sync';

const resolveTask331a = () => {
  console.log(
    '---------------------\nTask 331a - Check if number can be represented as n = x2 + y2 + z2.\n---------------------',
  );
  const n = Number(readlineSync.question('Please enter n: '));
  const findThree = () => {
    const sqrtN = Math.round(Math.sqrt(n));
    for (let x = 1; x <= sqrtN; x += 1) {
      for (let y = 1; y <= sqrtN; y += 1) {
        for (let z = 1; z <= sqrtN; z += 1) {
          if (x * x + y * y + z * z === n) {
            return `${x}^2 + ${y}^2 + ${z}^2 = ${n}`;
          }
        }
      }
    }
    return 'Cant be represented as n = x2 + y2 + z2';
  };

  console.log(findThree());
};

export default resolveTask331a;
