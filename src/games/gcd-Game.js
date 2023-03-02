import { randomNumber, greetAndLoop } from '../index.js';

const getQuestionAndRightAnswer = () => {
  const number1 = randomNumber(100);
  const number2 = randomNumber(100);
  let divider = 0;
  let greatestCommonDivisor = 0;
  if (number1 > number2) {
    divider = number2;
  } else if (number1 < number2) {
    divider = number1;
  }
  for (let i = divider; i > 0; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      greatestCommonDivisor = i;
      break;
    }
  }
  const rightAnswer = greatestCommonDivisor.toString();
  const question = `Question: ${number1} ${number2}`;
  return [question, rightAnswer];
};

const gcdGame = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  greetAndLoop(task, getQuestionAndRightAnswer);
};

export default gcdGame;
