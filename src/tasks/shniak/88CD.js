import readlineSync from 'readline-sync';

const resolveTask88CD = () => {
  console.log("------------------------\nTask 88 (c and d) - Swap first and last element of a number (n) and add '1' on the beginning and the end.\n------------------------");
  const n = Number(readlineSync.question('Please enter n: '));
  const swap = () => {
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
  console.log(swap());
};

export default resolveTask88CD;
