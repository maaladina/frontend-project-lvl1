import { randomNumber, greetAndLoop } from '../index.js';

const getQuestionAndRightAnswer = () => {
  const randomNumber1 = randomNumber(100);
  const question = `Question: ${randomNumber1}`;
  let rightAnswer = '';
  if (randomNumber1 % 2 === 0) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  return [question, rightAnswer];
};

const isEvenGame = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  greetAndLoop(task, getQuestionAndRightAnswer);
};

export default isEvenGame;
