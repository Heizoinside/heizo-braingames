import randomInteger from '../randomize';
import run from '..';

const message = 'Answer "yes" if number even otherwise answer "no"';

const isEven = num => num % 2 === 0;

const playGame = () => {
  const num = randomInteger(1, 100);
  const gameData = {
    correctAnswer: isEven(num) ? 'yes' : 'no',
    question: num,
  };
  return gameData;
};

const even = () => run(playGame, message);

export default even;
