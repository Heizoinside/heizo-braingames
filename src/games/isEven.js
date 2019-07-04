import readlineSync from 'readline-sync';
import randomInteger from '../randomize';

const isEven = (message) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  const iter = (rounds, num) => {
    if (rounds === 0) {
      console.log(`Congratulations, ${user}!`);
      return true;
    }
    const answer = readlineSync.question(`Question: ${num}\nYour answer: `);
    const correctAnswer = (num % 2 === 0) ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}\nLet's try again, ${user}`);
      return false;
    }
    return iter(rounds - 1, randomInteger(1, 100));
  };
  return iter(3, randomInteger(1, 100));
};
export default isEven;
