import randomInteger from '../randomize';
import run from '../run';

const message = 'What number is missing in the progression?';
const arrayMaker = () => {
  const firstNum = randomInteger(1, 100);
  const iter = (elem, arr) => {
    if (arr.length === 10) {
      return arr;
    }
    return iter(elem + 2, arr.concat(elem));
  };
  return iter(firstNum, []);
};
const game = () => {
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
const progression = () => run(game, message);
export default progression;
