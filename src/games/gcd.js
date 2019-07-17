import randomInteger from '../randomize';
import run from '../run';

const message = 'Find the greatest common divisor of given numbers.';
const nod = (num1, num2) => {
  const div = num1 > num2 ? num2 : num1;
  const iter = (acc) => {
    if (num1 % acc === 0 && num2 % acc === 0) {
      return acc;
    }
    return iter(acc - 1);
  };
  return iter(div);
};
const game = () => {
  const num1 = randomInteger(1, 100);
  const num2 = randomInteger(1, 100);
  const gameData = {
    correctAnswer: nod(num1, num2),
    question: `${num1} ${num2}`,
  };
  return gameData;
};
const gcd = () => run(game, message);
export default gcd;
