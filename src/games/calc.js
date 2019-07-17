import randomInteger from '../randomize';
import run from '../run';

const message = 'What is the result of the expression?';
const operations = (num1, num2) => {
  const randomOperator = (num) => {
    const gameData = {};
    switch (num) {
      case 1:
        gameData.correctAnswer = (num1 + num2);
        gameData.question = `${num1} + ${num2}`;
        break;
      case 2:
        gameData.correctAnswer = num1 - num2;
        gameData.question = `${num1} - ${num2}`;
        break;
      case 3:
        gameData.correctAnswer = num1 * num2;
        gameData.question = `${num1} * ${num2}`;
        break;
      default:
        return 0;
    }
    return gameData;
  };
  return randomOperator(randomInteger(1, 3));
};
const game = () => {
  const operand1 = randomInteger(1, 9);
  const operand2 = randomInteger(1, 9);
  return operations(operand1, operand2);
};
const calc = () => run(game, message);
export default calc;
