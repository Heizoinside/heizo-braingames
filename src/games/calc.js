import randomInteger from '../randomize';
import run from '..';

const description = 'What is the result of the expression?';
const start = 1;
const range = 10;

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
  const operand1 = randomInteger(start, range);
  const operand2 = randomInteger(start, range);
  const randomOperation = operations[randomInteger(0, operations.length - 1)];
  const question = `${operand1} ${randomOperation.operator} ${operand2}`;
  const correctAnswer = randomOperation.operation(operand1, operand2);
  return {
    question,
    correctAnswer: correctAnswer.toString(),
  };
};

export default () => run(makeGameData, description);
