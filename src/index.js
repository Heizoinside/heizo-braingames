import readlineSync from 'readline-sync';

const whatIsYourName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  const greetings = `Hello, ${userName}!`;
  console.log(greetings);
};
export default whatIsYourName;
