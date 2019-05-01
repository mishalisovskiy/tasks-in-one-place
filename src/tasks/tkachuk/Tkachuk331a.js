import readlineSync from 'readline-sync';

export const findThree = (n) => {
  if (!n || Number.isNaN(n)) return 'Invalid input, enter a number';
  const sqrtN = Math.round(Math.sqrt(n));
  for (let x = 1; x <= sqrtN; x += 1) {
    for (let y = 1; y <= sqrtN; y += 1) {
      for (let z = 1; z <= sqrtN; z += 1) {
        if (x * x + y * y + z * z === n) {
          return true;
        }
      }
    }
  }
  return false;
};

export const resolveTask331a = () => {
  console.log(
    '---------------------\nTask 331a - Check if number can be represented as n = x2 + y2 + z2.\n---------------------',
  );
  const n = Number(readlineSync.question('Please enter n: '));
  console.log(findThree(n));
};
