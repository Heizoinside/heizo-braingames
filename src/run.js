import readlineSync from 'readline-sync';

const run = (game, message) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  const iter = (rounds) => {
    const { correctAnswer, question } = game();
    const finalQuestion = `Question: ${question}\nYour answer: `;
    const finalAnswer = correctAnswer.toString();
    const userAnswer = readlineSync.question(finalQuestion);
    if (rounds === 3) {
      console.log(`Congratulations, ${user}!`);
      return true;
    }
    if (userAnswer === finalAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${finalAnswer}"\nLet's try again, ${user}`);
      return false;
    }
    return iter(rounds + 1);
  };
  return iter(1);
};
export default run;
