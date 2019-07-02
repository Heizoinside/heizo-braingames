import readlineSync from 'readline-sync';
const whatIsYourName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
};
export default whatIsYourName;
