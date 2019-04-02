import readlineSync from 'readline-sync';

const resolveTask109 = () => {
  console.log(
    '---------------------\nTask 109 - What is the smallest number of a kind 2^r, that is bigger than n.\n---------------------',
  );
  const n = Number(readlineSync.question('Please enter n: '));
  const findSmallestRaisedToPower = () => {
    let result = 1;
    while (result <= n) {
      result *= 2;
    }
    return result;
  };

  console.log(findSmallestRaisedToPower());
};

export default resolveTask109;
