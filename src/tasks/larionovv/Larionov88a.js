import readlineSync from 'readline-sync';

const resolveTaskLarionov88a = () => {
  console.log('Find out if the number "3" in the record n^2');
  let num = Number(readlineSync.question('Please enter n: '));
  const findNum = () => {
    let result = 'No';
    num *= num;
    const str = num.toString();
    for (let i = 0; i < str.length; i += 1) {
      if (str[i] === '3') {
        result = 'Yes';
        break;
      } else {
        result = 'No';
      }
    }
    return result;
  };
  console.log(findNum());
};

export default resolveTaskLarionov88a;
