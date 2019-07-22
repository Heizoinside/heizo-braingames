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

const playGame = () => {
  const num = randomInteger(1, 100);
  const gameData = {
    question: num,
    correctAnswer: isPrime(num) ? 'yes' : 'no',
  };
  return gameData;
};

const prime = () => run(playGame, message);
export default prime;
