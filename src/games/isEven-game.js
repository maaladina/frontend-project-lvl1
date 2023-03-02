import { randomNumber, greetAndLoop } from '../index.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getQuestionAndRightAnswer = () => {
  const number = randomNumber(100);
  const question = `Question: ${number}`;
  const rightAnswer = isEven(number);
  return [question, rightAnswer];
};

const isEvenGame = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  greetAndLoop(task, getQuestionAndRightAnswer);
};

export default isEvenGame;
