import randomInteger from '../randomize';
import run from '..';

const message = 'What is the result of the expression?';

const operations = [
  {
    operator: '+',
    makeOperation: (a, b) => a + b,
  },
  {
    operator: '-',
    makeOperation: (a, b) => a - b,
  },
  {
    operator: '*',
    makeOperation: (a, b) => a * b,
  },
];

const playGame = () => {
  const operand1 = randomInteger(1, 9);
  const operand2 = randomInteger(1, 9);
  const randomOperation = operations[randomInteger(0, operations.length - 1)];
  const gameData = {
    question: `${operand1} ${randomOperation.operator} ${operand2}`,
    correctAnswer: randomOperation.makeOperation(operand1, operand2),
  };
  return gameData;
};

const calc = () => run(playGame, message);
export default calc;
