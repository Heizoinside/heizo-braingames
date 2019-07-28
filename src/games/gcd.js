import randomInteger from '../randomize';
import run from '..';

const message = 'Find the greatest common divisor of given numbers.';
const randomStart = 1;
const randomRange = 100;

const findGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return findGcd(num2, (num1 % num2));
};

const makeGameData = () => {
  const num1 = randomInteger(randomStart, randomRange);
  const num2 = randomInteger(randomStart, randomRange);
  const gameData = {
    question: `${num1} ${num2}`,
    correctAnswer: findGcd(num1, num2),
  };
  return gameData;
};

export default () => run(makeGameData, message);
