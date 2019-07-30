import readlineSync from 'readline-sync';

const roundsCount = 3;

const run = (makeGameData, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  const iter = (round) => {
    const { correctAnswer, question } = makeGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (round === roundsCount) {
      console.log(`Congratulations, ${user}!`);
      return;
    }
    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${user}`);
      return;
    }
    console.log('Correct!');
    iter(round + 1);
  };
  iter(1);
};
export default run;
