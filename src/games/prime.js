import randomInteger from '../randomize';
import run from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const start = 1;
const range = 100;

const isPrime = (num) => {
  if (num < 2) return false;
  const iter = (divisor) => {
    if ((divisor ** 2) > num) return true;
    if (num % divisor === 0) return false;
    return iter(divisor + 1);
  };
  return iter(2);
};

const makeGameData = () => {
  const question = randomInteger(start, range);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => run(makeGameData, description);
