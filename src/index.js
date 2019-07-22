import readlineSync from 'readline-sync';

const run = (playGame, message) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  const iter = (round) => {
    const { correctAnswer, question } = playGame();
    const finalQuestion = `Question: ${question}\nYour answer: `;
    const finalAnswer = correctAnswer.toString();
    const userAnswer = readlineSync.question(finalQuestion);
    const gameLength = 3;
    if (round === gameLength) {
      console.log(`Congratulations, ${user}!`);
    }
    if (userAnswer === finalAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${finalAnswer}"\nLet's try again, ${user}`);
    }
    return iter(round + 1);
  };
  return iter(1);
};
export default run;
