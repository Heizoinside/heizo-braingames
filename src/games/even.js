import randomInteger from '../randomize';
import run from '..';

const message = 'Answer "yes" if number even otherwise answer "no"';
const startNumber = 1;
const numbersRange = 100;

const isEven = num => num % 2 === 0;

const makeGameData = () => {
  const gameData = {
    question: randomInteger(startNumber, numbersRange),
  };
  gameData.correctAnswer = isEven(gameData.question) ? 'yes' : 'no';
  return gameData;
};

export default () => run(makeGameData, message);
