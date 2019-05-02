import { enterNum, numberLength } from './utils';

const resolveTask86a = () => {
  console.log('------------------------\nTask 86a - how many digits in number n.\n------------------------');
  const n = enterNum();
  console.log(numberLength(n));
  return numberLength(n);
};

export default resolveTask86a;
