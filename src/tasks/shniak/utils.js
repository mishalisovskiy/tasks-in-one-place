import readlineSync from 'readline-sync';

export const whatNumber = () => {
  const n = Number(readlineSync.question('Please enter n: '));
  return n;
};

export const swap = (n) => {
  const number = n.toString();
  const arr = Array.from(number);

  const a = arr[0];
  const b = arr[arr.length - 1];

  arr[0] = b;
  arr[arr.length - 1] = a;

  arr.push(1);
  arr.unshift(1);

  const result = arr.join(''); // -- should've add '+' to return int, but it returns 2 digits numbers devided by ten without a leading zero
  return result;
};

export const lagrangeNumbers = (n) => {
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
