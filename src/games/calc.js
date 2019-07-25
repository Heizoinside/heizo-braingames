import randomInteger from '../randomize';
import run from '..';

const message = 'What is the result of the expression?';
const randomStart = 1;
const randomRange = 10;

const operations = [
  {
    operator: '+',
    operation: (a, b) => a + b,
  },
  {
    operator: '-',
    operation: (a, b) => a - b,
  },
  {
    operator: '*',
    operation: (a, b) => a * b,
  },
];

const makeGameData = () => {
  const operand1 = randomInteger(randomStart, randomRange);
  const operand2 = randomInteger(randomStart, randomRange);
  const randomOperation = operations[randomInteger(0, operations.length - 1)];
  const gameData = {
    question: `${operand1} ${randomOperation.operator} ${operand2}`,
    correctAnswer: randomOperation.operation(operand1, operand2),
  };
  return gameData;
};

export default () => run(makeGameData, message);
