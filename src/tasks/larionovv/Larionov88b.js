import {reverseNum, enterNumber} from './utils';

const resolveTask88b = () => {
  console.log('---------------------\nReturn reverse number n\n---------------------');
  const n = enterNumber();
  if (!Number(n)) {
    return console.log('invalid value');
  }console.log(reverseNum(n));
  return reverseNum(n);
};

export default resolveTask88b;
