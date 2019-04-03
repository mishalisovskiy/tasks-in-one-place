import readlineSync from 'readline-sync';

const resolveTask332 = () => {
  console.log('------------------------\nTask 332 - Lagrange’s Four Square Theorem: find four non negative integers, sum of squares of which gives n.\n------------------------');
  const n = Number(readlineSync.question('Please enter n: '));
  const lagrangeNumbers = () => {
    const limit = Math.sqrt(n);
    let answer;
    for (let x = 0; x < limit; x += 1) {
      for (let y = 0; y < limit; y += 1) {
        for (let z = 0; z < limit; z += 1) {
          for (let t = 0; t < limit; t += 1) {
            if (x * x + y * y + z * z + t * t === n) {
              answer = [x, y, z, t];
            }
          }
        }
      }
    }
    return answer;
  };
  console.log(lagrangeNumbers());
};

export default resolveTask332;
