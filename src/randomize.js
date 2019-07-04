const randomInteger = (min, max) => {
  let randomNum = min - 0.5 + Math.random() * (max - min + 1);
  randomNum = Math.round(randomNum);
  return randomNum;
};
export default randomInteger;
