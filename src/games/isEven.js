import randomInteger from '../randomize';
import run from '..';

const message = 'Answer "yes" if number even otherwise answer "no"';
const game = () => {
  const num = randomInteger(1, 100);
  const evenNum = num % 2 === 0;
  const gameData = {
    correctAnswer: evenNum ? 'yes' : 'no',
    question: `${num}`,
  };
  return gameData;
};
const isEven = () => run(game, message);
export default isEven;
