import randomInteger from '../randomize';
import run from '..';

const message = 'What number is missing in the progression?';

const arrayMaker = () => {
  const firstNum = randomInteger(1, 100);
  const numbersCount = 10;
  const iter = (elem, acc) => {
    if (acc.length === numbersCount) {
      return acc;
    }
    return iter(elem + 2, acc.concat(elem));
  };
  return iter(firstNum, []);
};

const playGame = () => {
  const arr = arrayMaker();
  const randomIndex = randomInteger(0, 9);
  const hiddenNum = arr[randomIndex];
  const newArr = arr.map(elem => (elem === hiddenNum ? '..' : elem));
  const gameData = {
    correctAnswer: hiddenNum,
    question: newArr.join(' '),
  };
  return gameData;
};

const progression = () => run(playGame, message);
export default progression;
