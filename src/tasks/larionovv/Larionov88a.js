import { enterNumber, findNumInRecord } from './utils';

const resolveTask88a = () => {
  console.log('---------------------\nFind out if the number "3" in the record n^2\n---------------------');
  const n = enterNumber();
  console.log(findNumInRecord(n));
};

export default resolveTask88a;
