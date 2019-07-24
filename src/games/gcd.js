import randomInteger from '../randomize';
import run from '..';

const message = 'Find the greatest common divisor of given numbers.';
const startNumber = 1;
const numbersRange = 100;

const findGcd = (num1, num2) => {
  const div = num1 > num2 ? num2 : num1;
  const iter = (acc) => {
    if (num1 % acc === 0 && num2 % acc === 0) {
      return acc;
    }
    return iter(acc - 1);
  };
  return iter(div);
};

const makeGameData = () => {
  const { num1, num2 } = randomInteger(startNumber, numbersRange);
  const gameData = {
    correctAnswer: findGcd(num1, num2),
    question: `${num1} ${num2}`,
  };
  return gameData;
};

export default () => run(makeGameData, message);
