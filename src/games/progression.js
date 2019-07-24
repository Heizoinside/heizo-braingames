import randomInteger from '../randomize';
import run from '..';

const message = 'What number is missing in the progression?';
const progressionLength = 10;
const startNumber = 1;
const numbersRange = 100;

const makeProgression = () => {
  const firstNum = randomInteger(startNumber, numbersRange);
  const iter = (elem, acc) => {
    if (acc.length === progressionLength) {
      return acc;
    }
    return iter(elem + 2, acc.concat(elem));
  };
  return iter(firstNum, []);
};

const makeGameData = () => {
  const progression = makeProgression();
  const randomIndex = randomInteger(0, progression.length - 1);
  const hiddenNumber = progression[randomIndex];
  const mappedProgression = progression.map(element => (element === hiddenNumber ? '..' : element));
  const gameData = {
    correctAnswer: hiddenNumber,
    question: mappedProgression.join(' '),
  };
  return gameData;
};

export default () => run(makeGameData, message);
