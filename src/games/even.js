import randomInteger from '../randomize';
import run from '..';

const description = 'Answer "yes" if number even otherwise answer "no"';
const start = 1;
const range = 999;

const isEven = num => num % 2 === 0;

const makeGameData = () => {
  const question = randomInteger(start, range);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => run(makeGameData, description);
