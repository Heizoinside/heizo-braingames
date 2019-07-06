import readlineSync from 'readline-sync';

const run = (game, message) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  const iter = (rounds) => {
    const { correctAnswer, question } = game();
    const answer = readlineSync.question(question);
    if (rounds === 3) {
      console.log(`Congratulations, ${user}!`);
      return true;
    }
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"\nLet's try again, ${user}`);
      return false;
    }
    return iter(rounds + 1);
  };
  return iter(1);
};
export default run;
