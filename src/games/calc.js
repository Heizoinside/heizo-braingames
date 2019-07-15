import randomInteger from '../randomize';
import run from '../run';

const message = 'What is the result of the expression?';
const operations = (num1, num2) => {
  const randomOperator = (num) => {
    const obj = {};
    switch (num) {
      case 1:
        obj.correctAnswer = (num1 + num2);
        obj.question = `Question: ${num1} + ${num2}\nYour answer: `;
        break;
      case 2:
        obj.correctAnswer = num1 - num2;
        obj.question = `Question: ${num1} - ${num2}\nYour answer: `;
        break;
      case 3:
        obj.correctAnswer = num1 * num2;
        obj.question = `Question: ${num1} * ${num2}\nYour answer: `;
        break;
      default:
        return 0;
    }
    return obj;
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
