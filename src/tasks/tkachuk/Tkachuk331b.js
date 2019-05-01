import readlineSync from 'readline-sync';

export const findAllThree = (n) => {
  if (!n || Number.isNaN(n)) return 'Invalid input, enter a number';
  const sqrtN = Math.round(Math.sqrt(n));
  const result = [];
  for (let x = 1; x <= sqrtN; x += 1) {
    for (let y = 1; y <= sqrtN; y += 1) {
      for (let z = 1; z <= sqrtN; z += 1) {
        if (x * x + y * y + z * z === n) {
          result.push(`${x}^2 + ${y}^2 + ${z}^2 = ${n}`);
        }
      }
    }
  }
  if (result.length > 0) {
    return result;
  }
  return 'Cant be represented as n = x2 + y2 + z2';
};

export const resolveTask331b = () => {
  console.log(
    '---------------------\nTask 331b - Check if number can be represented as n = x2 + y2 + z2 and return all possible variants.\n---------------------',
  );
  const n = Number(readlineSync.question('Please enter n: '));
  console.log(findAllThree(n));
};
