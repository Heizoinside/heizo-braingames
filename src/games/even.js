import randomInteger from '../randomize';
import run from '..';

const message = 'Answer "yes" if number even otherwise answer "no"';
const randomStart = 1;
const randomRange = 100;

const isEven = num => num % 2 === 0;

const makeGameData = () => {
  const gameData = {
    question: randomInteger(randomStart, randomRange),
  };
  gameData.correctAnswer = isEven(gameData.question) ? 'yes' : 'no';
  return gameData;
};

export default () => run(makeGameData, message);
