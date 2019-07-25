import randomInteger from '../randomize';
import run from '..';

const message = 'Find the greatest common divisor of given numbers.';
const randomStart = 1;
const randomRange = 100;

const findGcd = (num1, num2) => {
  const divisor = num1 > num2 ? num2 : num1;
  const iter = (acc) => {
    if (num1 % acc === 0 && num2 % acc === 0) {
      return acc;
    }
    return iter(acc - 1);
  };
  return iter(divisor);
};

const makeGameData = () => {
  const { num1, num2 } = randomInteger(randomStart, randomRange);
  const gameData = {
    correctAnswer: findGcd(num1, num2),
    question: `${num1} ${num2}`,
  };
  return gameData;
};

export default () => run(makeGameData, message);
