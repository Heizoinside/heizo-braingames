import randomInteger from '../randomize';
import run from '..';

const message = 'What number is missing in the progression?';
const progressionLength = 10;
const randomStart = 1;
const randomRange = 100;

const makeProgression = () => {
  const progressionStart = randomInteger(randomStart, randomRange);
  const iter = (elem, progression) => {
    if (progression.length === progressionLength) {
      return progression;
    }
    return iter(elem + 2, progression.concat(elem));
  };
  return iter(progressionStart, []);
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
