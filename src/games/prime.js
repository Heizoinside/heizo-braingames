import randomInteger from '../randomize';
import run from '..';

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num < 2) return false;
  const iter = (divisor) => {
    if (num === divisor) return true;
    if (num % divisor === 0) return false;
    return iter(divisor + 1);
  };
  return iter(2);
};
const game = () => {
  const num = randomInteger(1, 100);
  const gameData = {
    correctAnswer: isPrime(num) ? 'yes' : 'no',
    question: `${num}`,
  };
  return gameData;
};
const prime = () => run(game, message);
export default prime;
