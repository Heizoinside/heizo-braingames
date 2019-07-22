import readlineSync from 'readline-sync';

const run = (playGame, message) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  const gameLength = 3;
  const iter = (round) => {
    const { correctAnswer, question } = playGame();
    const finalQuestion = `Question: ${question}\nYour answer: `;
    const finalAnswer = correctAnswer.toString();
    const userAnswer = readlineSync.question(finalQuestion);
    const incorrectAnswer = `"${userAnswer}" is wrong answer ;(. Correct answer was "${finalAnswer}"\nLet's try again, ${user}`;
    if (round === 1) {
      return console.log(`Congratulations, ${user}!`);
    }
    if (userAnswer === finalAnswer) {
      console.log('Correct!');
    } else {
      return console.log(incorrectAnswer);
    }
    return iter(round - 1);
  };
  return iter(gameLength);
};
export default run;
