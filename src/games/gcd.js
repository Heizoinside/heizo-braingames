import randomInteger from '../randomize';
import run from '..';

const description = 'Find the greatest common divisor of given numbers.';
const start = 1;
const range = 100;

const findGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return findGcd(num2, (num1 % num2));
};

const makeGameData = () => {
  const num1 = randomInteger(start, range);
  const num2 = randomInteger(start, range);
  const question = `${num1} ${num2}`;
  const correctAnswer = findGcd(num1, num2);
  return {
    question,
    correctAnswer: correctAnswer.toString(),
  };
};

export default () => run(makeGameData, description);
